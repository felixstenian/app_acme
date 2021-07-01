const camelize = (str) => {
  str = str.toLowerCase()
  str = str.replace(/_/g, ' ')
  str = str.replace(/-/g, ' ')
  return str.replace(/\W+(.)/g, function (match, chr) {
    return chr.toUpperCase()
  })
}

export { camelize }
