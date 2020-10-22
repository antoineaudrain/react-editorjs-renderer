const propsConstructor = (customStyle) => (type, child = '') => {
  return {
    class: `er-${child ? [type, child].join('__') : type}`,
    style: child
      ? customStyle[child] || {}
      : customStyle
  }
}

export default propsConstructor
