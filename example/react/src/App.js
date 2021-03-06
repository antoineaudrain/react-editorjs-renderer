import React from 'react'
import Navigation from './components/Navigation'
import SectionInfo from './components/SectionInfo'
import SectionPreview from './components/SectionPreview'
import SectionEditor from './components/SectionEditor'
import defaultData from './config/block-style.json'
import './App.css'

const App = () => {
  return (
    <>
      <Navigation />

      <div className="editor-landing">
        <SectionInfo />

        <div className="editor-landing__demo">
          <SectionPreview data={defaultData} />

          <section className="editor-landing__section-header">
            <header>And here is a generated HTML</header>
            Use it in Web, mobile — everywhere. Easy to use and mods.
          </section>

          <SectionEditor data={defaultData} />
        </div>

        <section className="editor-landing__section-header editor-landing__section-header--big">
          <header>API is the feature.</header>
          Each Block is rendered with a default React component. It's easy to create your own.
        </section>
      </div>
    </>
  )
}

export default App