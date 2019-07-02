import { membersAPI } from '../../../api/member'
import { MemberEntity } from '../../../model'

export const fetchMembersAction = () => (dispatch) => {
  // ajax api
  membersAPI.fetchMembers()
    .then((members) => {
      // 下一个动作
      dispatch(fetchMembersCompleted(members))
    }).catch((err) => {

    })
}

// actions 返回的是一个 type 对象， reducer 重新计算
// reducer = state + mutations
const fetchMembersCompleted = (members: MemberEntity[] ) => ({
  type: 'FETCH_MEMBER_COMPLETED',
  payload: members
})