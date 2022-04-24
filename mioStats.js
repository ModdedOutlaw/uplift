  const urlMio = "https://wax.api.atomicassets.io/atomicassets/v1/accounts?collection_name=upliftium.hi&schema_name=upliftium&page=1&limit=100&order=desc";
  const outputMio = document.querySelector('.outputMio');
 
  fetch(urlMio).then(function (res) {
    return res.json()
  }).then(function (data) {
 
    let list = data.data;
    let i = 0;
    let j = 1;
   
    while (i < 50) {
      outputMio.innerHTML += '<br> <b>' + j + '. </b>' + list[i].account + '. ' + list[i].assets + '<br>';
      i = i + 1;
      j++;
    }

  }).catch(function (error) {
    console.log(error);

  })