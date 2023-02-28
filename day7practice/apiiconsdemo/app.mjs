import axios from  'axios'
axios.get('https://dummyjson.com/products/1')
  .then(function (response) {
    // handle success
    const data=response.data
    console.log(data.title)
   // console.log(response.data);
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })
  .finally(function () {
    // always executed
  });