  const urlTopBurn = "https://moddedoutlaw.github.io/uplift/scraper/burnleaders.json";
  const outputTopBurn = document.querySelector('.output3');
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
    //console.log("total =" + totalBurned)

    let perBurn = 0;
    data.data.payload.leaderboard.forEach(function (val) {
      perBurn = (val.burnedAmount / totalBurned) * 100;
      outputTopBurn.innerHTML += '<br>' + val.waxWallet + ' = ' + perBurn.toFixed(2) + ' % <br>';

    });

    // console.log("total burned =" + totalBurned)
  }).catch(function (error) {
    console.log(error);

  })