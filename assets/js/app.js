const gen_count = 10;
var get_data_sheeps = [];
var f_sheepPen = getRandomIntInclusive(1, 10);
var s_sheepPen = getRandomIntInclusive(1, 10);
var t_sheepPen = getRandomIntInclusive(1, 10);
var fo_sheepPen = getRandomIntInclusive(1, 10);
var calc_random = f_sheepPen + s_sheepPen + t_sheepPen + fo_sheepPen;

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min; 
}

function saveText(a, text){
    let text_var = document.getElementById(a).value;
    
    document.getElementById(a).innerHTML = text_var + text + "\n";
}

function get_random_data() {
  while(calc_random != 10){
    f_sheepPen = getRandomIntInclusive(1, 10);
    s_sheepPen = getRandomIntInclusive(1, 10);
    t_sheepPen = getRandomIntInclusive(1, 10);
    fo_sheepPen = getRandomIntInclusive(1, 10);
    calc_random = f_sheepPen + s_sheepPen + t_sheepPen + fo_sheepPen;
  }
  // console.log(calc_random);
  // console.log(f_sheepPen);
  // console.log(s_sheepPen);
  // console.log(t_sheepPen);
  // console.log(fo_sheepPen);
}
var post_count = 10;
axios('./backend/req.php?get_sheepsPen=1')
.then(function (response) {
  // console.log(response.data.mas);
  if (response.data.mas == '') { //if emty sheeps pen list
    axios('./backend/req.php?start=1');
    axios('./backend/req.php?start_get=1')
    .then(function (response) {
      // console.log(response.data);
      get_random_data();
      for (var i = 0; i <= response.data.length; i++) {
        if(i < f_sheepPen){
          saveText('f_sheepPen', response.data[i][1]);
          // add log history
          axios('./backend/req.php?log=' + response.data[i][1] + ' дабавлен на загон 1')
        }
        if(i >= f_sheepPen && i < s_sheepPen + f_sheepPen){
          saveText('s_sheepPen', response.data[i][1]);
          // add log history
          axios('./backend/req.php?log=' + response.data[i][1] + ' дабавлен на загон 2')
        }
        if(i >= s_sheepPen + f_sheepPen && i < s_sheepPen + f_sheepPen + t_sheepPen){
          saveText('t_sheepPen', response.data[i][1]);
          // add log history
          axios('./backend/req.php?log=' + response.data[i][1] + ' дабавлен на загон 3')
        }
        if(i >= t_sheepPen + s_sheepPen + f_sheepPen && i < s_sheepPen + f_sheepPen + t_sheepPen + fo_sheepPen){
          saveText('fo_sheepPen', response.data[i][1]);
          // add log history
          axios('./backend/req.php?log=' + response.data[i][1] + ' дабавлен на загон 3')
        }
      }
    })
    .catch(function (error) {
      console.log(error);
    })
  }
  else{
    axios('./backend/req.php?get_all_sheepsPen=1')
    .then(function (response) {
      console.log(response.data);
      let arr1 = response.data[0].mas.split(',').filter(function(item) {
      return item !== '';
    });
      let arr2 = response.data[1].mas.split(',').filter(function(item) {
      return item !== '';
    });
      let arr3 = response.data[2].mas.split(',').filter(function(item) {
      return item !== '';
    });
      let arr4 = response.data[3].mas.split(',').filter(function(item) {
      return item !== '';
    });
      for (var i = 0; i < arr1.length; i++) {
        case__(arr1[i], 1);
      }
      for (var i = 0; i < arr2.length; i++) {
        case__(arr2[i], 2);
      }
      for (var i = 0; i < arr3.length; i++) {
        case__(arr3[i], 3);
      }
      for (var i = 0; i < arr4.length; i++) {
        case__(arr4[i], 4);
      }

      let arr = arr1.concat(arr2, arr3, arr4);
      let arr_num = Math.max.apply(null,arr);
      window.post_count = arr_num;

    })
    .catch(function (error) {
      console.log(error);
    })
  }
})
.catch(function (error) {
  console.log(error);
})

// 2
// timer
var timer = setInterval(() => {
  largeSheepPen();
  autoScroll('f_sheepPen');
  autoScroll('s_sheepPen');
  autoScroll('t_sheepPen');
  autoScroll('fo_sheepPen');
  document.getElementById('timer').value = (document.getElementById('timer').value * 1) + 1;
  let v = (document.getElementById('timer').value * 1) % 10;
  let plusDay = (document.getElementById('dayCount').value * 1) + 1;
  if(v == 0){
    axios('./backend/req.php?day=' + plusDay);
    document.getElementById('dayCount').value = (document.getElementById('dayCount').value * 1) + 1;
    post_count++;
    axios('./backend/req.php?post=' + post_count)
    .then(function (response) {
      // console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    })
    .then(function (response) {
      let takeRandomSheepPen = getRandomIntInclusive(1, 4);
      case__(post_count, takeRandomSheepPen);
      // console.log(takeRandomSheepPen);
    })
    .then(function (response) {
      //3
      let x = document.getElementById('dayCount').value * 1;
      let y = x % 10;
      // console.log(y);
      if(y == 0){
        let takeRandomSheepPen = getRandomIntInclusive(1, 4);
        removeOnceSheep(takeRandomSheepPen);
      }
    })
    .then(function (response) {
      // post arrays
      let data_post1 = document.getElementById('f_sheepPen').value;
      data_post1 = data_post1.split('\n');
      axios('./backend/req.php?post_sheepsPen=1&mas1=' + data_post1);

      let data_post2 = document.getElementById('s_sheepPen').value;
      data_post2 = data_post2.split('\n');
      axios('./backend/req.php?post_sheepsPen=1&mas2=' + data_post2);

      let data_post3 = document.getElementById('t_sheepPen').value;
      data_post3 = data_post3.split('\n');
      axios('./backend/req.php?post_sheepsPen=1&mas3=' + data_post3);

      let data_post4 = document.getElementById('fo_sheepPen').value;
      data_post4 = data_post4.split('\n');
      axios('./backend/req.php?post_sheepsPen=1&mas4=' + data_post4);
    })
  }
}, 1000);

// functions
function case__(data, a){
  switch (a) {
    case 1:
    saveText('f_sheepPen', data);
    // add log history
    axios('./backend/req.php?log=' + data + ' дабавлен в загон 1')
    break;
    case 2:
    saveText('s_sheepPen', data);
    // add log history
    axios('./backend/req.php?log=' + data + ' дабавлен в загон 2')
    break;
    case 3:
    saveText('t_sheepPen', data);
    // add log history
    axios('./backend/req.php?log=' + data + ' дабавлен в загон 3')
    break;
    case 4:
    saveText('fo_sheepPen', data);
    // add log history
    axios('./backend/req.php?log=' + data + ' дабавлен в загон 4')
    break;
    default:
    console.log("a > 4");
  }
}

// 3
function caseGetId(a){
  switch (a) {
    case 1:
    return 'f_sheepPen';
    break;
    case 2:
    return 's_sheepPen';
    break;
    case 3:
    return 't_sheepPen';
    break;
    case 4:
    return 'fo_sheepPen';
    break;
    default:
    console.log("a > 4");
  }
}
function largeSheepPen() {
  let id1 = caseGetId(1);
  let id2 = caseGetId(2);
  let id3 = caseGetId(3);
  let id4 = caseGetId(4);
  let a = document.getElementById(id1).value;
  let b = document.getElementById(id2).value;
  let c = document.getElementById(id3).value;
  let d = document.getElementById(id4).value;
  a = a.split('\n').length;
  b = b.split('\n').length;
  c = c.split('\n').length;
  d = d.split('\n').length;
  let max = Math.max(a, b, c, d);
  let min = Math.min(a, b, c, d);
  let id;
  if(max == a){
    // console.log(id1);
    axios('./backend/req.php?max_sheeps_pen=1')
    id = id1;
  }
  else if(max == b){
    // console.log(id2);
    axios('./backend/req.php?max_sheeps_pen=2')
    id = id2;
  }
  else if(max == c){
    // console.log(id3);
    axios('./backend/req.php?max_sheeps_pen=3')
    id = id3;
  }
  else if(max == d){
    // console.log(id4);
    axios('./backend/req.php?max_sheeps_pen=4')
    id = id4;
  }

  if(min == a){
    axios('./backend/req.php?min_sheeps_pen=1')
  }
  else if(min == b){
    axios('./backend/req.php?min_sheeps_pen=2')
  }
  else if(min == c){
    axios('./backend/req.php?min_sheeps_pen=3')
  }
  else if(min == d){
    axios('./backend/req.php?min_sheeps_pen=4')
    id = id4;
  }
  return id;
}

function removeOnceSheep(a) {
  let getId = caseGetId(a);
  let b = document.getElementById(getId).value;
  let mas = b.split('\n');
  let ran = getRandomIntInclusive(0, mas.length - 2);
  // console.log(mas);
  // console.log(ran);
  if(mas.length > 2){
    // add log history
    axios('./backend/req.php?log=' + mas[ran] + ' убит')
    // add dead_sheeps_list_post
    axios('./backend/req.php?dead_sheeps_list_post=' + mas[ran])
    // delete item in array
    mas = mas.filter(function(item) {
      return item !== mas[ran];
    })
  }
  else{
    let largeId = largeSheepPen();
    let b2 = document.getElementById(largeId).value;
    let mas2 = b2.split('\n');
    let ran2 = getRandomIntInclusive(0, mas2.length - 2);
    var migrate = mas2[ran];
    mas2 = mas2.filter(function(item) {
      return item !== mas2[ran];
    })

    for (var i = 0; i < mas2.length; i++) {
      if(i == 0){
        document.getElementById(largeId).innerHTML = "";
        document.getElementById(largeId).innerHTML = document.getElementById(largeId).innerHTML + mas2[i] + '\n';
      }
      else{
        if(i == mas2.length - 1){
          document.getElementById(largeId).innerHTML = document.getElementById(largeId).innerHTML + mas2[i];
        }else{
          document.getElementById(largeId).innerHTML = document.getElementById(largeId).innerHTML + mas2[i] + '\n';
        }
      }
    }
    mas.push(migrate + '\n');
    // add log history
    axios('./backend/req.php?log=' + migrate + ' перенесен на загон')
  }
  // console.log(mas);
  for (var i = 0; i < mas.length; i++) {
    if(i == 0){
      document.getElementById(getId).innerHTML = "";
      document.getElementById(getId).innerHTML = document.getElementById(getId).innerHTML + mas[i] + '\n';
    }
    else{
      if(i == mas.length - 1){
        document.getElementById(getId).innerHTML = document.getElementById(getId).innerHTML + mas[i];
      }else{
        document.getElementById(getId).innerHTML = document.getElementById(getId).innerHTML + mas[i] + '\n';
      }
    }
  }

}

// 4 sinc day on update
axios('./backend/req.php?get_day=1')
.then(function (response) {
  console.log(response.data)
  document.getElementById('dayCount').value = response.data.day;
})
.catch(function (error) {
  console.log(error);
})

// murder sheeps
function murder_sheeps() {
  axios('./backend/req.php?muder_sheeps=1')
}

// update window
function update() {
  location.reload();
}

// auto scroll patch

function autoScroll(id) {
  var elem = document.getElementById(id);  
  elem.scrollTop = elem.scrollHeight;
  // console.log(elem.scrollTop);
}
 