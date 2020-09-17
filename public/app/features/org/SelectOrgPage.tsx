import React, { FC, useState } from 'react';
import Page from 'app/core/components/Page/Page';
import { getBackendSrv, config } from '@grafana/runtime';
import { UserOrg } from 'app/types';
import { useAsync } from 'react-use';
import { Button, HorizontalGroup } from '@grafana/ui';

const navModel = {
  main: {
    icon: 'grafana',
    subTitle: '偏好',
    text: '选择活动组织',
  },
  node: {
    text: '选择活动组织',
  },
};

const getUserOrgs = async () => {
  return await getBackendSrv().get('/api/user/orgs');
};
const setUserOrg = async (org: UserOrg) => {
  return await getBackendSrv()
    .post('/api/user/using/' + org.orgId)
    .then(() => {
      window.location.href = config.appSubUrl + '/';
    });
};

export const SelectOrgPage: FC = () => {
  const [orgs, setOrgs] = useState<UserOrg[]>();

  useAsync(async () => {
    setOrgs(await getUserOrgs());
  }, []);
  return (
    <Page navModel={navModel}>
      <Page.Contents>
        <div>
          <p>由于公开邀请，您已被添加到其他组织！请选择您现在要使用的组织（以后可以随时更改）。</p>
          <HorizontalGroup wrap>
            {orgs &&
              orgs.map(org => (
                <Button key={org.orgId} icon="signin" onClick={() => setUserOrg(org)}>
                  {org.name}
                </Button>
              ))}
          </HorizontalGroup>
        </div>
      </Page.Contents>
    </Page>
  );
};

export default SelectOrgPage;
