const propsConstructor = (customStyle) => (type, child = '') => {
  return {
    class: `er-${child ? [type, child].join('__') : type}`,
    style: customStyle
  }
}

export default propsConstructor
