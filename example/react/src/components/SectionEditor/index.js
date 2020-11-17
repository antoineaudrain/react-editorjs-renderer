import React from 'react'
import './index.css'

const SectionEditor = ({ data }) => {
  return (
    <section className="editor-landing__demo-editor">
      <div className="editor-landing__demo-editor-inner">
        <pre className="editor">
          {JSON.stringify(data, null, 2)}
        </pre>
      </div>
    </section>
  )
}

export default SectionEditor
