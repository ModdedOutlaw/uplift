  const urlAlcorCharts = "https://wax.alcor.exchange/api/pools/616/charts?period=7D";
 // const outputAlcorStats = document.querySelector('.outputAlcorStats');
 
  fetch(urlAlcorCharts).then(function (res) {
  //  var chart = new ApexCharts(document.querySelector("#chart"), res);
  //  chart.render();
  //  console.log("ChartJson = " + res);
    return res.json()
  }).then(function (data) {
    console.log("ChartJson = " + data);
   // var chart = new ApexCharts(document.querySelector("#chart"), data);
   
    data.forEach(function(val){
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