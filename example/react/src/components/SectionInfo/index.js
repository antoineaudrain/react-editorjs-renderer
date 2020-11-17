import React from 'react'
import './index.css'

const SectionInfo = () => {
  return (
    <section className="editor-landing__section-info">
      <h1 className="editor-landing__title">React Editor.js Renderer</h1>
      <div className="editor-landing__description">
        Next generation block styled renderer for React.<br/> Free. Use for pleasure.<br/>
      </div>
      <a
        className="editor-landing__cta"
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
