import React from 'react'
import s from './loading.module.css'

const Loading = (props) => {
  return (
    <>{props.loading && <div className={s.load}>
    Loading...
  </div>}</>
  )
}

export default Loading