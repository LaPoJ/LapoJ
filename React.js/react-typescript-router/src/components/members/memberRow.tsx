import * as React from 'react'
import { MemberEntity } from '../../model/memberEntity';

interface Props {
  member: MemberEntity
}

export const MemberRow: React.StatelessComponent<Props>  = ({ member }) => {
  return (
    <tr key={ member.id }>
      <td>
        <img src={ member.avatar_url } className="avatar" alt=""/>
      </td>
      <td><span>{ member.id }</span></td>
      <td><span>{ member.login }</span></td>
    </tr>
  )
}