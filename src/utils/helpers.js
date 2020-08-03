const queryParser = (queryStr) => {
  const query = new URLSearchParams(queryStr)
  const data = {}
  const entries = [...query.entries()]
  entries.forEach((params) => {
    const [key, value] = params
    data[key] = value
  })

  return data
}
export default queryParser
