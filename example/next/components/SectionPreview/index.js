import React from 'react'
import EditorRendererProvider from 'react-editorjs-renderer'
import styles from './index.module.css'

const SectionPreview = ({ data }) => {
  return (
    <section className={styles.editor_landing__demo_preview}>
      <div className={styles.editor_landing__demo_preview_inner}>
        <EditorRendererProvider
          className={styles.editor_renderer}
          data={data}
        />
      </div>
    </section>
  )
}

export default SectionPreview
