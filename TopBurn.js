  const urlTopBurn = "https://moddedoutlaw.github.io/uplift/scraper/burnleaders.json";
  const outputTopBurn = document.querySelector('.output3');
  const outputTotalBurn = document.querySelector('.outputTotalBurn');

  let totalBurned = 0;
  outputTopBurn.innerHTML = "";
  // console.log(urlTopBurn);
  fetch(urlTopBurn).then(function (res) {
    // console.log("res..."+ JSON.stringify(res));
    // console.log(res);
    return res.json()
  }).then(function (data) {

    //  console.log("data..."+ data.data.payload.leaderboard[0].waxWallet);

    totalBurned = data.data.payload.total;
    outputTotalBurn.innerHTML += '<br><b>' + totalBurned.toLocaleString("en-US") + ' </b><br>';
    //console.log("total =" + totalBurned)
     
    let perBurn = 0;
    j = 1;
    data.data.payload.leaderboard.forEach(function (val) {
      perBurn = (val.burnedAmount / totalBurned) * 100;
      outputTopBurn.innerHTML += '<br> <b>' + j + '. </b>' + val.waxWallet + ' '+val.burnedAmount.toLocaleString("en-US") + ' = ' + perBurn.toFixed(2) + ' % <br>';
      j++;
    });

    // console.log("total burned =" + totalBurned)
  }).catch(function (error) {
    console.log(error);

  })