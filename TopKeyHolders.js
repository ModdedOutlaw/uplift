  const url2 = "https://wax.api.atomicassets.io/atomicassets/v1/accounts?collection_name=upliftworld&schema_name=keys&page=1&limit=5000&order=desc";

  const output2 = document.querySelector('.output2');
  var TotalHolders = 0;
  var TotalAssets = 0;


  fetch(url2).then(function (res) {

    return res.json()
  }).then(function (data) {
    //console.log(data);
    let list = data.data;
    TotalHolders = list.length -2;
    data.data.forEach(function (val) {
      //console.log(val);
      TotalAssets += parseInt(val.assets);
    });
  //  console.log("TotalAssets = " + TotalAssets);
    let i = 2;
    let perKeys = 0;
    let upliftAssets = 0;
    upliftAssets = parseInt(list[0].assets) + parseInt(list[1].assets);
    //console.log(upliftAssets);
    TotalAssets = TotalAssets - upliftAssets;
    
    while (i < 102) {
      perKeys = (list[i].assets/TotalAssets) * 100
      output2.innerHTML += '<br> <b>' + (i-1) + '. </b>' + list[i].account + '  ' + list[i].assets + ' = '+ perKeys.toFixed(2) +' % <br>';
      i = i + 1;
    }
  //  console.log(list.length);

    //output2.innerHTML += '<br> <b>Total Holders = ' + TotalHolders + '<br>';

   // output2.innerHTML += '<br> <b>Total Assets = ' + TotalAssets + '<br>';

  }).catch(function (error) {
    console.log(error);

  })