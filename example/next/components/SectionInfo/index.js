import React from 'react'
import styles from './index.module.css'

const SectionInfo = () => {
  return (
    <section className={styles.editor_landing__section_info}>
      <h1 className={styles.editor_landing__title}>React Editor.js Renderer</h1>
      <div className={styles.editor_landing__description}>
        Next generation block styled renderer for React.<br/> Free. Use for pleasure.<br/>
      </div>
      <a
        className={styles.editor_landing__cta}
        href="https://www.npmjs.com/package/react-editorjs-renderer"
        target="_blank"
        rel="noopener noreferrer"
      >
        Get started
      </a>
    </section>
  )
}

export default SectionInfo
