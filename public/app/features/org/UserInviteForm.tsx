import React, { FC } from 'react';
import {
  HorizontalGroup,
  Button,
  LinkButton,
  Input,
  Switch,
  RadioButtonGroup,
  Form,
  Field,
  InputControl,
} from '@grafana/ui';
import { getConfig } from 'app/core/config';
import { OrgRole } from 'app/types';
import { getBackendSrv } from '@grafana/runtime';
import { updateLocation } from 'app/core/actions';
import { connect } from 'react-redux';
import { hot } from 'react-hot-loader';
import { appEvents } from 'app/core/core';
import { AppEvents, locationUtil } from '@grafana/data';

const roles = [
  { label: '检视器', value: OrgRole.Viewer },
  { label: '编辑', value: OrgRole.Editor },
  { label: '管理员', value: OrgRole.Admin },
];

interface FormModel {
  role: OrgRole;
  name: string;
  loginOrEmail?: string;
  sendEmail: boolean;
  email: string;
}

interface Props {
  updateLocation: typeof updateLocation;
}

export const UserInviteForm: FC<Props> = ({ updateLocation }) => {
  const onSubmit = async (formData: FormModel) => {
    try {
      await getBackendSrv().post('/api/org/invites', formData);
    } catch (err) {
      appEvents.emit(AppEvents.alertError, ['Failed to send invite', err.message]);
    }
    updateLocation({ path: 'org/users/' });
  };
  const defaultValues: FormModel = {
    name: '',
    email: '',
    role: OrgRole.Editor,
    sendEmail: true,
  };

  return (
    <Form defaultValues={defaultValues} onSubmit={onSubmit}>
      {({ register, control, errors }) => {
        return (
          <>
            <Field
              invalid={!!errors.loginOrEmail}
              error={!!errors.loginOrEmail && 'Email or Username is required'}
              label="电子邮件或用户名"
            >
              <Input name="loginOrEmail" placeholder="email@example.com" ref={register({ required: true })} />
            </Field>
            <Field invalid={!!errors.name} label="姓名">
              <Input name="name" placeholder="（可选的）" ref={register} />
            </Field>
            <Field invalid={!!errors.role} label="角色">
              <InputControl as={RadioButtonGroup} control={control} options={roles} name="role" />
            </Field>
            <Field invalid={!!errors.sendEmail} label="发送邀请电子邮件">
              <Switch name="sendEmail" ref={register} />
            </Field>
            <HorizontalGroup>
              <Button type="submit">提交</Button>
              <LinkButton href={locationUtil.assureBaseUrl(getConfig().appSubUrl + '/org/users')} variant="secondary">
                背部
              </LinkButton>
            </HorizontalGroup>
          </>
        );
      }}
    </Form>
  );
};

const mapDispatchToProps = {
  updateLocation,
};

export default hot(module)(connect(null, mapDispatchToProps)(UserInviteForm));
