import React from 'react'
import  './content.module.css'

class Content extends React.Component{
  render() {
    return (
      <main>{this.props.children}</main>
    )
  }
}

export default Content