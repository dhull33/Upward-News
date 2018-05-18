import React from 'react'

const newsAPIKey = '32fafd1455b44c1dbfb0924c66fc1206'

const buildNewsAPI = () => {
  return 'https://newsapi.org/v2/top-headlines?' +
    'country=us' + '&pageSize=1' +
    '&apiKey=' + newsAPIKey
}

const getMainHeadLine  = () => {
  fetch(buildNewsAPI())
    .then(res => res.json())
    .then((data) => {
        return data
        })
}

export default getMainHeadLine