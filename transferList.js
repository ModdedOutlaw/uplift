  const urlTransferMio = "https://wax.api.atomicassets.io/atomicassets/v1/transfers?account=wesaveuplift&schema_name=upliftium&page=1&limit=100&order=desc&sort=created";

  const outputTransfers = document.querySelector('.outputTransfers');
  const outputTransfersList = document.querySelector('.outputTransfersList');


  outputTransfers.innerHTML = "";
  outputTransfersList.innerHTML = "";


  fetch(urlTransferMio).then(function (res) {
    return res.json()
  }).then(function (data) {
    //console.log(data.data);

    let list = data.data;

    

    var sortedlist = [];
    var sortedarray = [];
    var newlist = new Array();

    for (let i = 0; i < list.length; i++) {

      sortedlist.push([list[i].sender_name, Object.keys(list[i].assets).length]);
    }
    sortedarray = sortedlist.slice().sort();

   
    let i = 0;
    let k = 0;
    let length = sortedarray.length;

    console.log(sortedarray);

    while (i < length) {
      if (i === 0) {
        newlist.push(sortedarray[i]);
        k++;
        i++;
      } else {
        if (sortedarray[i][0] === newlist[k - 1][0]) {
          newlist[k - 1][1] += sortedarray[i][1];
          i++;
        } else {
          newlist.push(sortedarray[i]);
          i++;
          k++;
        }
      }
    }

  let tt = 0;
    
   for(let i = 0; i < newlist.length; i++){
       tt += newlist[i][1];
       outputTransfersList.innerHTML += '<br> <b>' + (i+1) + '. </b>' + newlist[i][0] + '  ' + newlist[i][1] + '<br>';
    }
    console.log(newlist);

    outputTransfers.innerHTML += '<br><b>'+tt+'</b><br>';

  }).catch(function (error) {
    console.log(error);

  })