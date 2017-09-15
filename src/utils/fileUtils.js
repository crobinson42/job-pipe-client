export const convertArrayOfObjectsToCsv = ({ data, heading }) => {
  let csv = `${heading}\n\n\n`

  csv += Object.keys(data[0])
  csv += '\n'

  data.forEach((row) => {
    csv += Object.values(row).join(',')
    csv += '\n'
  })

  return csv
}

export const downloadData = ({ data, fileName, fileExtension }) => {
  const hiddenElement = document.createElement('a')
  hiddenElement.href = `data:text/csv;charset=utf-8,${encodeURI(data)}`
  hiddenElement.target = '_blank'
  hiddenElement.download = `${fileName}.${fileExtension}`
  hiddenElement.click()
}
