import React from 'react'
import styles from "./styles.module.css"
import { Link } from "react-router-dom";

const CustomLinkButton = ({to,title}) => {
  return (
    <>
    <Link class={`${styles['link']} col-3 my-1 d-inline-block rounded-2 mx-2 shadow-sm`} to={to}>{title}</Link>
    </>
  )
}

export default CustomLinkButton