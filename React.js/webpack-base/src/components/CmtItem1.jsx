import React from 'react'

import styles from '@/components/styles'

export default function CmtItem1(props) {
  return <div style={styles.item}>
    <h3 style={styles.user} >评论人：{props.user}</h3>
    <p style={styles.content} >评论内容： {props.content}</p>
  </div>
}