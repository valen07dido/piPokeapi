import React from 'react'
import styles from './Footer.module.css'
import piePagina from './img/footer.jpg'
const Footer = () => {
  return (
    <img src={piePagina} alt="pie de pagina" className={styles.img} />
  )
}

export default Footer