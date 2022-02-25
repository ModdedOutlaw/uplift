  const urlAlcor = "https://wax.alcor.exchange/api/markets";
  const urlWaxPriceCurrent = "https://api.coingecko.com/api/v3/simple/price?ids=wax&vs_currencies=usd"
  const outputAlcorStats = document.querySelector('.outputAlcorStats');
 
  fetch(urlAlcor).then(function (res) {
    return res.json()
  }).then(function (data) {
    //console.log("Name = " + data[0].base_token.symbol.name);
    //data.forEach(function(val){
     // if(val.quote_token.symbol.name == "LIFTIUM"){
       // console.log("Name = " + val.quote_token.symbol.name);
        //console.log("1 Liftium = " + val.last_price +" wax");
        //console.log("1 wax = " + 1/(val.last_price) + " Liftium");
        //console.log("24hr Volume = " + val.volume24 + " Liftium");

     // }
      
    //});
  }).catch(function (error) {
    console.log(error);

  })