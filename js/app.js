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
  "Rosa Choi"
];

var used = [];
var picks = [];


$(document).ready(function(){
  if (names.length % 2 != 0) {
      alert("You must have an even number of names. You currently have " + names.length + " names.");
  }
  radomizeClicked();
  shuffle(names);
});

function radomizeClicked() {
  $('#randomize').on('click', function(){
    console.log('clicked!')
    $('#pairingList').append('<li>'+picks+'</li>');
  })
}


function shuffle(array) {
  for( var i = 0; i < names.length; i++){
    var random = Math.floor(Math.random()*names.length);

    if(names[random] == names[i]) {
        names[random] = names[random++];
        picks.push(names[i] + " gets " + names[random]);
        used.push(names[random]);
    } else {
        picks.push(names[i] + " gets " + names[random]);
        used.push(names[random]);
    }

  }

}
