var names = [
  "Kevin Litchfield",
  "Erika Lim",
  "Zubair Desai",
  "Nina Bachvarova",
  "Julien Mayer",
  "Denise Shephard",
  "Oscar Linares",
  "Max Gordon",
  "Dana Mulder",
  "Rory Grant",
  "Tina Hweicheng Loh",
  "Kristian Ziel",
  "Ngan Pham",
  "Brady Stilwell",
  "Michael Dean",
  "Alex Sell",
  "Michael Smykowski",
  "Luis Manzo",
  "Heather Farley",
  "Irina Tagintseva",
  "Lauren Richie",
  "Edozie Izegbu",
  "David Dang",
  "Bradley Johnson",
  "Helen Lam",
  "Cameron Irmas",
  "Victoria Billingsley",
  "Rosa Choi",
];

$(document).ready(function(){
  $('#randomize').on('click', radomizeButtonClicked);
});

function radomizeButtonClicked() {
  $('#pairingList').empty();
  shuffleStudents = shuffle(names);
      pairs = pair(names);
  for(var k=0; k < (shuffleStudents.length)/2; k++){
    // $('#pairingList').append('<li>'+ pairs[k][0]+ " and "+ pairs[k][1]+'</li>');

    var source = $("#gStudentsList").html();
    var template = Handlebars.compile(source);
    var context = {
      student_one_name: pairs[k][0],
      student_two_name: pairs[k][1],
    }
    var html = template(context);
    $('#pairingList').append(html);
  }
}

function shuffle(array) {
  var temp;

  for( var i = 0; i < array.length; i++) {
    var random = Math.floor(Math.random()*array.length);

    temp = array[random];
    array[random] = array[i];
    array[i] = temp
  }
  return array
}

function pair(array) {
  var pairs = [];

  for (var i = 0, j = 2; j <= array.length; i = i + 2 , j = j + 2) {
    var pair = array.slice(i, j);
    pairs.push(pair);
  }
  return pairs
}
