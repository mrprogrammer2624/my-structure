import React from "react"
import styles from "./CHImgTag.module.css"

export const CHImgTag = ({ imgSrc, title, key }) => {
  return (
    <div className={styles.tagWrapper} key={key}>
      <img src={imgSrc} alt={title} />
      <p className="clr-black">{title}</p>
    </div>
  )
}
