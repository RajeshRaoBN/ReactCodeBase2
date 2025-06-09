import React from 'react'

export const FetchEx = () => {
    fetch('https://get.geojs.io/v1/ip/country.json')
    .then(res => {
        if (res.ok) {
            console.log("success")
            res.json()
            .then(data => console.log(data))
            .catch(error => console.log({error}))
        } else {
            console.log('Not Successful')
        }})
        getData()
    
  return (
    <div>FetchEx</div>
  )

  async function getData() {
  const url = "https://get.geojs.io/v1/ip/country.json";
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }

    const json = await response.json();
    console.log(json);
  } catch (error) {
    console.error(error.message);
  }
}
}
