import React from 'react'
import styles from './index.module.css'

const SectionEditor = ({ data }) => {
  return (
    <section className={styles.editor_landing__demo_editor}>
      <div className={styles.editor_landing__demo_editor_inner}>
        <pre className={styles.editor}>
          {JSON.stringify(data, null, 2)}
        </pre>
      </div>
    </section>
  )
}

export default SectionEditor
