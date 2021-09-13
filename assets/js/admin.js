function saveText(a, text){
    let text_var = document.getElementById(a).value;
    document.getElementById(a).innerHTML = text_var + text + "\n";
}

var timer = setInterval(() => {
    autoScroll('log');
    axios('./backend/req.php?log_get=1')
    .then(function (response) {
        // console.log(response.data)
        document.getElementById('log').innerHTML = '';
        for (var i = 0; i <= response.data.length; i++) {
            // console.log( response.data[i].history)
            saveText('log', response.data[i].history);
        }
    })
    .catch(function (error) {
        console.log(error);
    })
    axios('./backend/req.php?sheeps_list_get=1')
    .then(function (response) {
        // console.log(response.data)
        document.getElementById('all_sheeps').innerHTML = response.data.length;
    })
    .catch(function (error) {
        console.log(error);
    })

    axios('./backend/req.php?dead_sheeps_list=1')
    .then(function (response) {
        // console.log(response.data)
        document.getElementById('all_dead_sheeps').innerHTML = response.data.length;
    })
    .catch(function (error) {
        console.log(error);
    })

    document.getElementById('alive_sheeps').innerHTML = (document.getElementById('all_sheeps').innerHTML * 1) - (document.getElementById('all_dead_sheeps').innerHTML * 1);

    axios('./backend/req.php?get_max_sheeps_pen=1')
    .then(function (response) {
        // console.log(response.data)
        document.getElementById('max').innerHTML = response.data.num + '- загон';
    })
    .catch(function (error) {
        console.log(error);
    })
    axios('./backend/req.php?get_min_sheeps_pen=1')
    .then(function (response) {
        // console.log(response.data)
        document.getElementById('min').innerHTML = response.data.num + '- загон';
    })
    .catch(function (error) {
        console.log(error);
    })

}, 1000)

function clean_log() {
    axios('./backend/req.php?log_clean=1')
}

// auto scroll patch

function autoScroll(id) {
  var elem = document.getElementById(id);  
  elem.scrollTop = elem.scrollHeight;
  // console.log(elem.scrollTop);
}
