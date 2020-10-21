import React from 'react';
import './index.css';

function Navigation() {
  const routes = [
    {
      title: 'Guides',
      url: '/base-concepts',
    },
    {
      title: 'Api',
      url: '/api',
    },
    {
      title: 'Github',
      url: 'https://github.com/antoineaudrain/react-editorjs-renderer',
    },
    {
      title: 'Support Project',
      url: 'https://opencollective.com/editorjs',
    },
  ]

  return (
    <nav className="sticky-header">
      <header className="docs-header">
        <a href="/" className="docs-header__logo">
          React Editor.js Renderer
        </a>

        <ul className="docs-header__menu">
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
