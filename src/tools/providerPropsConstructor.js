const providerPropsConstructor = (defaultStyle, customStyle) => (
  type
) => {
  const baseStyle = !customStyle[type]
    ? {
        ...defaultStyle[type],
        color: '#313649',
        lineHeight: '1.6',
        letterSpacing: '.005em'
      }
    : {}
  return {
    style: { ...baseStyle, ...customStyle },
    class: `er-${type}`
  }
}

export default providerPropsConstructor
