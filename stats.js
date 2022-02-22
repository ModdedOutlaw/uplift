  const urlStats = "/scraper/upliftium.json";
  const circSup = document.querySelector('.outputCircSup');
  const issuedSup = document.querySelector('.outputIssuedSup');
  const claimable = document.querySelector('.outputClaimable');
  const outputTransactionTypes = document.querySelector('.outputTransactionType');

  circSup.innerHTML = "";

  fetch(urlStats).then(function (res) {
    return res.json()
  }).then(function (data) {
    circSup.innerHTML += '<br><b>' + data.data.payload.circulatingSupply + ' </b><br>';
    //console.log("wallets = " +data.data.payload.wallets);
    //console.log("number of transactions = " +data.data.payload.numTransactions);
    //console.log("Circulating Supply = " +data.data.payload.circulatingSupply);
    //console.log("issued supply = " +data.data.payload.issuedSupply);
    //console.log("transactions = " +data.data.payload.transactions.byType[0].numTransactions + ' Action Type = ' +data.data.payload.transactions.byType[0].actionType);
    
    data.data.payload.transactions.byType.forEach(function (val) {
      //console.log("transactions = " + val.numTransactions + " Action Type =" + val.actionType);
    });
    //console.log("claimable = " +data.data.payload.claimable);
    //console.log("Number of Linked Accounts = " +data.data.payload.numLinkedAccounts);
  }).catch(function (error) {
    console.log(error);

  })