  const url = "https://www.api.bloks.io/wax/tokens?type=topHolders&chain=wax&contract=tokenizednft&symbol=LIFTIUM&limit=500";
  const output = document.querySelector('.output');
  let total = 0;

  fetch(url).then(function (res) {
    //console.log(res);
    return res.json()
  }).then(function (data) {

    let text = data;
    let j = 1;
    /*data.forEach(function (val) {
      stext = text[j].toString();
      temptext = stext.split(",");
      output.innerHTML += '<br> <b>' + j + '. </b>' + temptext[0] + '    ' + temptext[1]+ '<br>';
      j++
    });*/
  
    let i = 0;
    while (j < 26) {
      stext = text[j-1].toString();
      temptext = stext.split(",");
      output.innerHTML += '<br> <b>' + j + '. </b>' + temptext[0] + '    ' + parseInt(temptext[1]).toLocaleString("en-US")+ '<br>';
      j++

    }
    //  console.log(total);
  }).catch(function (error) {
    console.log(error);

  })