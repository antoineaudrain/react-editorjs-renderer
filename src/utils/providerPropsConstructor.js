const providerPropsConstructor = (defaultStyle, customStyle, config) => (
  type
) => {
  const baseStyle =
    !config.disableDefaultStyle && !customStyle[type]
      ? {
          ...defaultStyle[type],
          fontSize: '15px',
          color: '#313649',
          lineHeight: '1.6',
          letterSpacing: '.005em'
        }
      : {}
  return {
    style: { ...baseStyle, ...customStyle },
    class: `er-${type}`,
    ...config[type]
  }
}

export default providerPropsConstructor
