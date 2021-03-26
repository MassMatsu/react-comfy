export const formatPrice = (number) => {
  const newNumber = Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  }).format(number / 100);
  return newNumber;
};

export const getUniqueValues = (items, prop) => {
  const uniqueItems = items.reduce((values, item) => {
    if (prop === 'colors') {
      values.push(item[prop])
      values = values.flat() // flatten array of arrays
      values = [...new Set(values)]
      
    } else if (!values.includes(item[prop])) {
      values.push(item[prop]);
    }
    return values
  }, []);
  uniqueItems.unshift('all')
  return uniqueItems
  
};
