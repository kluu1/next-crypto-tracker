export const formatCurrency = value => {
  const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD'
  })
  return formatter.format(value)
}

export const convertToPercentage = value => {
  return (value * 100).toFixed(2) + '%'
}
