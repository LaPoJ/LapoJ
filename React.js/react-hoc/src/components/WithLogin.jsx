import React from 'react'

const withLogin = (Com) => {

  const isLogin = false

  class NewComponet extends React.Component{
    render () {

      const props = this.props
      if (isLogin) {
        return(
          <button>login</button>
        )
      }

      return(
        <Com {...props}/>
      )
    }
  }
  NewComponet.displayName  = `withLogin(${Com.displayName})`
  return NewComponet
}

export default withLogin