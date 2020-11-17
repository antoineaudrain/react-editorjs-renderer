import React from 'react';
import styles from './index.module.css';

function Navigation() {
  const routes = [
    {
      title: 'Github',
      url: 'https://github.com/antoineaudrain/react-editorjs-renderer',
    },
  ]

  return (
    <nav className={styles.sticky_header}>
      <header className={styles.docs_header}>
        <a href="/" className={styles.docs_header_logo}>
          React Editor.js Renderer
        </a>

        <ul className={styles.docs_header_menu}>
          {routes.map(({title, url}, index) => (
            <li key={index}>
              <a href={url}>
                {title}
              </a>
            </li>
          ))}
        </ul>
      </header>
    </nav>
  );
}

export default Navigation;
