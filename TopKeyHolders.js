  const url2 = "https://wax.api.atomicassets.io/atomicassets/v1/accounts?collection_name=upliftworld&schema_name=keys&page=1&limit=5000&order=desc";

  const output2 = document.querySelector('.output2');
  var TotalHolders = 0;
  var TotalAssets = 0;


  fetch(url2).then(function (res) {

    return res.json()
  }).then(function (data) {
    console.log(data.data);
    let list = data.data;
    TotalHolders = list.length -2;
    data.data.forEach(function (val) {

      TotalAssets += parseInt(val.assets);
      if(val.account == "upliftsocial"|| val.account == "upliftservic" || val.account == "upliftpoolsx" || val.account == "upliftworld1" || val.account == "neftyblocksp"){
        console.log("UPLIFT ASSET");
        TotalAssets -= parseInt(val.assets);
      }

    });
    
    let i = 0;
    let perKeys = 0;
    let standing = 0;
 
    while (i < 104) {
      perKeys = (list[i].assets/TotalAssets) * 100
      if(list[i].account == "upliftsocial"|| list[i].account == "upliftservic" ||list[i].account == "upliftpoolsx" || list[i].account == "upliftworld1" || list[i].account == "neftyblocksp"){
      }else{
        standing = standing + 1;
      output2.innerHTML += '<br> <b>' + (standing) + '. </b>' + list[i].account + '  ' + list[i].assets + ' = '+ perKeys.toFixed(2) +' % <br>';
      
      }
      i = i + 1;
    }



  }).catch(function (error) {
    console.log(error);

  })