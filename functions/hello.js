// domain/.netlify/functions/hello

const items = [
  {
    id: 1, name: 'masa'
  },
  {
    id: 2, name: 'kimi'
  },
  {
    id: 3, name: 'yo'
  },
  {
    id: 4, name: 'hey'
  }
]

exports.handler = async function(event, context) {
  return {
    statusCode:200,
    body: JSON.stringify(items),
  }
} 