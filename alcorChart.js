  const urlAlcorCharts = "https://alcor.exchange/api/markets";
 // const outputAlcorStats = document.querySelector('.outputAlcorStats');
 
  fetch(urlAlcorCharts).then(function (res) {
  //  var chart = new ApexCharts(document.querySelector("#chart"), res);
  //  chart.render();
  //  console.log("ChartJson = " + res);
    return res.json()
  }).then(function (data) {
    console.log("ChartJson = " + data[0].base_token.symbol.name);
   // var chart = new ApexCharts(document.querySelector("#chart"), data);
   
    data.forEach(function(val){
      console.log(val.quote_token.symbol.name);
      console.log(val.last_price);


     /* if(val.quote_token.symbol.name == "LIFTIUM"){
        console.log("Name = " + val.quote_token.symbol.name);
        console.log("1 Liftium = " + val.last_price +" wax");
        console.log("1 wax = " + 1/(val.last_price) + " Liftium");
        console.log("24hr Volume = " + val.volume24 + " Liftium");

      }*/
      
    });
  }).catch(function (error) {
    console.log(error);

  })