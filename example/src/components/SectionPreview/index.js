import React from 'react'
import EditorRendererProvider from 'react-editorjs-renderer'
// import 'react-editorjs-renderer/dist/index.css'
import './index.css'

const SectionPreview = ({ data }) => {
  return (
    <section className="editor-landing__demo-preview">
      <div className="editor-landing__demo-preview-inner">
        <EditorRendererProvider data={data} className="editor-renderer" />
      </div>
    </section>
  )
}

export default SectionPreview
