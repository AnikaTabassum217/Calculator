const getData = () => {
  axios.get('http://localhost:9090/api/create').then(response => {
    console.log(response);
  });
};