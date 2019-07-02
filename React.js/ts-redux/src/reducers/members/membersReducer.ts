import { MemberEntity } from "../../model";

// 状态的计算 函数， reduce  纯函数 返回当前的状态
// state, 初始值
export const membersReducer = (state: MemberEntity[] = [], action ) => {
  switch(action.type) {
    case 'FETCH_MEMBER_COMPLETED':
      return action.payload
    case 'b':
      return 'b'
  }
  return state;
}