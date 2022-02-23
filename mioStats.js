  const urlMio = "https://wax.api.atomicassets.io/atomicassets/v1/accounts?collection_name=upliftium.hi&schema_name=upliftium&page=1&limit=100&order=desc";
  const outputMio = document.querySelector('.outputMio');
 
  fetch(urlMio).then(function (res) {
    return res.json()
  }).then(function (data) {
    //console.log("Mio Stats = " + data.data);
    //console.log("wallets = " +data.data.payload.wallets);
    //console.log("number of transactions = " +data.data.payload.numTransactions);
    //console.log("Circulating Supply = " +data.data.payload.circulatingSupply);
    ///console.log("issued supply = " +data.data.payload.issuedSupply);
    //console.log("transactions = " +data.data.payload.transactions.byType[0].numTransactions + ' Action Type = ' +data.data.payload.transactions.byType[0].actionType);
    
   //data.data.forEach(function (val) {
     //console.log("Account = " + val.account + " Assets =" + val.assets);
   // });
    let list = data.data;
    let i = 0;
    let j = 1;
    //console.log(list);
    while (i < 50) {
      //perKeys = (list[i].assets/TotalAssets) * 100
      outputMio.innerHTML += '<br> <b>' + j + '. </b>' + list[i].account + '. ' + list[i].assets + '<br>';
      i = i + 1;
      j++;
    }
    //console.log("claimable = " +data.data.payload.claimable);
    //console.log("Number of Linked Accounts = " +data.data.payload.numLinkedAccounts);
  }).catch(function (error) {
    console.log(error);

  })