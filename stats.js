  const urlStats = "https://moddedoutlaw.github.io/uplift/scraper/upliftium.json";
  const circSup = document.querySelector('.outputCircSup');
  const issuedSup = document.querySelector('.outputIssuedSup');
  const claimable = document.querySelector('.outputClaimable');
  const outputTransactionTypes = document.querySelector('.outputTransactionType');

  circSup.innerHTML = "";
  issuedSup.innerHTML = "";
  claimable.innerHTML = "";
  outputTransactionTypes.innerHTML = "";

  fetch(urlStats).then(function (res) {
    return res.json()
  }).then(function (data) {
    let cs = data.data.payload.circulatingSupply;
    let is = data.data.payload.issuedSupply;
    let cl = data.data.payload.claimable;
    let tt = data.data.payload.transactions.byType[2].numTransactions;

    circSup.innerHTML += '<br><b>' + cs.toLocaleString("en-US") + ' </b><br>';
    issuedSup.innerHTML += '<br><b>' + is.toLocaleString("en-US") + ' </b><br>';
    claimable.innerHTML += '<br><b>' + parseInt(cl).toLocaleString("en-US") + ' </b><br>';
    outputTransactionTypes.innerHTML += '<br><b>' + tt.toLocaleString("en-US") + ' </b><br>';

    //console.log("wallets = " +data.data.payload.wallets);
    //console.log("number of transactions = " +data.data.payload.numTransactions);
    //console.log("Circulating Supply = " +data.data.payload.circulatingSupply);
    //console.log("issued supply = " +data.data.payload.issuedSupply);
    //console.log("transactions = " +data.data.payload.transactions.byType[0].numTransactions + ' Action Type = ' +data.data.payload.transactions.byType[0].actionType);
    
    data.data.payload.transactions.byType.forEach(function (val) {
      //outputTransactionTypes.innerHTML +="transactions = " + val.numTransactions + " Action Type =" + val.actionType;
      //console.log("transactions = " + val.numTransactions + " Action Type =" + val.actionType);
    });
    //console.log("claimable = " +data.data.payload.claimable);
    //console.log("Number of Linked Accounts = " +data.data.payload.numLinkedAccounts);
  }).catch(function (error) {
    console.log(error);

  })