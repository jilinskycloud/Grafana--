import React, { PureComponent } from 'react';
import { Invitee } from 'app/types';
import InviteeRow from './InviteeRow';

export interface Props {
  invitees: Invitee[];
}

export default class InviteesTable extends PureComponent<Props> {
  render() {
    const { invitees } = this.props;

    return (
      <table className="filter-table form-inline">
        <thead>
          <tr>
            <th>电子邮件</th>
            <th>名称</th>
            <th />
            <th style={{ width: '34px' }} />
          </tr>
        </thead>
        <tbody>
          {invitees.map((invitee, index) => {
            return <InviteeRow key={`${invitee.id}-${index}`} invitee={invitee} />;
          })}
        </tbody>
      </table>
    );
  }
}
