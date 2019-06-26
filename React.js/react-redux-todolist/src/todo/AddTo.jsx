import React from 'react'
import { connect } from 'react-redux'

let generateID = -1

class AddTo extends React.Component{
  state = {

  }


  render () {
    const { dispatch } = this.props

    console.log('all--',this.props)
    return (
      <React.Fragment>
        <form  onSubmit={ e => {
          e.preventDefault()
          if (this.inputNode.value.trim()){
            generateID++
            dispatch({
              type: 'ADD_TODO',
              id: generateID,
              text: this.inputNode.value.trim()
            })
          }
        }}>
          <input type="text" ref={ node => this.inputNode = node }/>
          <button type="submit">AddToDo</button>
        </form>

      </React.Fragment>
    )
  }
}

//#regin
  // mapStateToProps -> 将状态映射为 props
  // mapDispatchToProps -> 将dispatch 映射为 props
  // export default connect( (state) => {
  //   console.log('connect: -> state', state)
  //   return { a: 1 }
  // }, (dispatch) => {
  //   return {
  //     b: () => {
  //       console.log('b')
  //     }
  //   }
  // })(AddTo)
//#regin

export default connect()(AddTo)