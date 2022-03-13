  const urlStats = "https://moddedoutlaw.github.io/uplift/scraper/upliftium.json";
  const circSup = document.querySelector('.outputCircSup');
  const issuedSup = document.querySelector('.outputIssuedSup');
  const claimable = document.querySelector('.outputClaimable');
  const outputTransactionTypes = document.querySelector('.outputTransactionType');
  const outputCrystallizeNFT = document.querySelector('.outputCrystallizeNFT');
  const outputMeltNFT = document.querySelector('.MeltNFT');
  const outputPictures = document.querySelector('.outputPictures');
  const outputPortals = document.querySelector('.outputPortals');
  const outputScreenshots = document.querySelector('.outputScreenshots');
  const outputWallets = document.querySelector('.outputWallets');



  circSup.innerHTML = "";
  issuedSup.innerHTML = "";
  claimable.innerHTML = "";
  //outputTransactionTypes.innerHTML = "";
  outputCrystallizeNFT.innerHTML = "";
  outputMeltNFT.innerHTML = "";
  outputPictures.innerHTML = "";
  outputPortals.innerHTML = "";
  outputScreenshots.innerHTML = "";
  outputWallets.innerHTML = "";


  fetch(urlStats).then(function (res) {
    return res.json()
  }).then(function (data) {

    //console.log(data);
    let cs = data.data.payload.circulatingSupply;
    let is = data.data.payload.issuedSupply;
    let cl = data.data.payload.claimable;
    let tt = data.data.payload.transactions.byType[1].numTransactions;

    circSup.innerHTML += '<br><b>' + cs.toLocaleString("en-US") + ' </b><br>';
    issuedSup.innerHTML += '<br><b>' + is.toLocaleString("en-US") + ' </b><br>';
    claimable.innerHTML += '<br><b>' + parseInt(cl).toLocaleString("en-US") + ' </b><br>';
    outputTransactionTypes.innerHTML += '<br><b>' + tt.toLocaleString("en-US") + ' </b><br>';
    outputWallets.innerHTML += '<br><b>' +  data.data.payload.wallets.toLocaleString("en-US") + ' </b><br>';
    outputCrystallizeNFT.innerHTML += '<br><b>' + data.data.payload.transactions.byType[4].numTransactions.toLocaleString("en-US") + ' </b><br>';
    outputMeltNFT.innerHTML += '<br><b>' + data.data.payload.transactions.byType[5].numTransactions.toLocaleString("en-US") + ' </b><br>';
    outputPictures.innerHTML += '<br><b>' + data.data.payload.transactions.byType[6].numTransactions.toLocaleString("en-US") + ' </b><br>';
    outputPortals.innerHTML += '<br><b>' + data.data.payload.transactions.byType[7].numTransactions.toLocaleString("en-US") + ' </b><br>';
    outputScreenshots.innerHTML += '<br><b>' + data.data.payload.transactions.byType[8].numTransactions.toLocaleString("en-US") + ' </b><br>';

    //console.log("wallets = " +data.data.payload.wallets);
    //console.log("number of transactions = " +data.data.payload.numTransactions);
    //console.log("Circulating Supply = " +data.data.payload.circulatingSupply);
    //console.log("issued supply = " +data.data.payload.issuedSupply);
    //console.log("transactions = " +data.data.payload.transactions.byType[0].numTransactions + ' Action Type = ' +data.data.payload.transactions.byType[0].actionType);
    
    //data.data.payload.transactions.byType.forEach(function (val) {
      //outputTransactionTypes.innerHTML +='<br><b>' +  val.numTransactions +'    ' + val.actionType + '</b><br>';
      //console.log("transactions = " + val.numTransactions + " Action Type =" + val.actionType);
    //});
    //console.log("claimable = " +data.data.payload.claimable);
    //console.log("Number of Linked Accounts = " +data.data.payload.numLinkedAccounts);
  }).catch(function (error) {
    console.log(error);

  })