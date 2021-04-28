import { useEffect, useState } from 'react';
import format from 'date-fns/format'
import ptBR from 'date-fns/locale/pt-BR'

import styles from './styles.module.scss'

export function Header() {
  let page

  useEffect(() => {
    page = document.querySelector('html')
    page.dataset.theme = `theme-light`
  }, [])

  
  function toggleDarkMode() {
    if (page.dataset.theme === 'theme-dark') {
      page.dataset.theme = `theme-light`;
    } else {
      page.dataset.theme = `theme-dark`;
    }
  }

  const currentDate = format(new Date(), 'EEEEEE, d MMMM', {
    locale: ptBR,
  })

  return (
    <header className={styles.headerContainer}>
      <img src="/logo.svg" alt="Podcastr" />

      <p>O melhor para você ouvir, sempre</p>

      <button onClick={toggleDarkMode}>
        <img src="/sun-and-moon.svg" alt="" />
      </button>
      <span>{currentDate}</span>
    </header>
  )
}