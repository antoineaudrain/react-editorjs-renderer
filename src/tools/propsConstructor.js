const propsConstructor = (style) => (type, child = '') => {
  return {
    class: `er-${child ? [type, child].join('__') : type} ${style.disable ? 'disable-style' : ''}`.trim(),
    style: child
      ? style[child] || {}
      : style
  }
}

export default propsConstructor
