const propsConstructor = (customStyle, defaultStyle) => (type, child = '') => {
  if (!!child) {
    return {
      className: `er-${[type, child].join('__')}`,
      style: {
        ...(!customStyle.disable ? defaultStyle[child] : {}),
        ...(customStyle[child] || {})
      }
    }
  }

  return {
    className: `er-${type}`,
    style: {
      ...(!customStyle.disable ? defaultStyle : {}),
      ...(customStyle || {})
    }
  }
}

export default propsConstructor
