import React, { FC, useEffect } from 'react';
import { getNavModel } from 'app/core/selectors/navModel';
import Page from 'app/core/components/Page/Page';
import { useSelector } from 'react-redux';
import { StoreState } from 'app/types/store';
import { LinkButton, InfoBox, VerticalGroup } from '@grafana/ui';
import { getBackendSrv } from '@grafana/runtime';
import { AdminOrgsTable } from './AdminOrgsTable';
import useAsyncFn from 'react-use/lib/useAsyncFn';

const deleteOrg = async (orgId: number) => {
  return await getBackendSrv().delete('/api/orgs/' + orgId);
};

const getOrgs = async () => {
  return await getBackendSrv().get('/api/orgs');
};

export const AdminListOrgsPages: FC = () => {
  const navIndex = useSelector((state: StoreState) => state.navIndex);
  const navModel = getNavModel(navIndex, 'global-orgs');
  const [state, fetchOrgs] = useAsyncFn(async () => await getOrgs(), []);

  useEffect(() => {
    fetchOrgs();
  }, []);

  return (
    <Page navModel={navModel}>
      <Page.Contents>
        <>
          <div className="page-action-bar">
            <InfoBox branded>
              <VerticalGroup spacing="xs">
                <p>
                  少于1％的Grafana安装使用组织，并且我们认为大多数安装更好地与团队合作。因此，
                  我们正在考虑不加强调，并最终在将来的Grafana版本中弃用组织。 如果您想提供反馈或描述您的需求，请这样做{' '}
                  <a className="external-link" href="https://github.com/grafana/grafana/issues/24588">
                    here
                  </a>
                  .{' '}
                </p>
              </VerticalGroup>
            </InfoBox>

            <div className="page-action-bar__spacer" />
            <LinkButton icon="plus" href="org/new">
              新组织
            </LinkButton>
          </div>
          {state.loading && 'Fetching organizations'}
          {state.error}
          {state.value && (
            <AdminOrgsTable
              orgs={state.value}
              onDelete={orgId => {
                deleteOrg(orgId).then(() => fetchOrgs());
              }}
            />
          )}
        </>
      </Page.Contents>
    </Page>
  );
};

export default AdminListOrgsPages;
