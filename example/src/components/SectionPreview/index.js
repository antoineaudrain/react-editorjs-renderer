import React from 'react'
import EditorRendererProvider from 'react-editorjs-renderer'
import './index.css'

const SectionPreview = ({ data }) => {
  return (
    <section className="editor-landing__demo-preview">
      <div className="editor-landing__demo-preview-inner">
        <EditorRendererProvider
          className="editor-renderer"
          data={data}
          components={[
            {
              name: 'header',
              component: () => <></>
            },
            {
              name: 'paragraph',
              component: () => <></>
            }
          ]}
        />
      </div>
    </section>
  )
}

export default SectionPreview
