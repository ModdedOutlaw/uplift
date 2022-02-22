  const url = "https://www.api.bloks.io/wax/tokens?type=topHolders&chain=wax&contract=tokenizednft&symbol=LIFTIUM&limit=500";
  const output = document.querySelector('.output');
  let total = 0;

  fetch(url).then(function (res) {
    return res.json()
  }).then(function (data) {
    data.forEach(function (val) {
      total += parseInt(val[1]);
    });

    let i = 1;
    while (i < 26) {
      output.innerHTML += '<br> <b>' + i + '. </b>' + data[i - 1] + '<br>';
      i = i + 1;
    }
  //  console.log(total);
  }).catch(function (error) {
    console.log(error);

  })