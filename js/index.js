var number = [];
var block = false;

function insertNumber(number) {
  if (!block) {
    var p = document.getElementsByTagName('p');
    p[0].innerHTML = p[0].innerHTML + number;
  } else {
    alert("Atualize a página para nova soma");
  }
}

function addPlus() {
  if (!block) {
    var p = document.getElementsByTagName('p');
    number.push(parseInt(p[0].innerHTML));
    p[0].innerHTML = '';
  } else {
    alert("Atualize a página para nova soma");
  }
}

function result() {

  if (!block) {
    var result = 0;

    var p = document.getElementsByTagName('p');
    number.push(parseInt(p[0].innerHTML));

    for (var i = 0; i < number.length; i++) {
      result += number[i];
    }

    p[0].innerHTML = result;
  } else {
    alert("Atualize a página para nova soma");
  }

  block = true;

}
