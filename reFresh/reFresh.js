



//var namespace = {'Computer Science', 'News', 'Business', 'UrbanDictionary'};
/*
var namespace = {};
namespace['Computer Science'] = {};
namespace['Computer Science']['techcrunch.com'] = "";
namespace['Computer Science']['wikipedia.org'] = "";
console.log("Poop");
search = function(query){
  var total = 0;
  var artCount = 0;
  var theQuery = namespace[query];
  for (var dom in theQuery ){
    //dom = {}; //declare array for articles
    while (artCount < 3){
      var site = "site:" + dom;
      var fdate = new Date().getFullYear();
      var idate = fdate - 1;
      var range = idate + ".." + fdate;
      var fire = site + " " + query + " " + range;
      console.log(fire);

      //grab url of specific article

      //dom.push(/*url);

      artCount++;
      total++;  
    }
    artCount = 0; /*reset 
  }
};

*/
Tasks = new Mongo.Collection("tasks");

Router.route('/register');

Router.route('/', function () {
  this.render('Home');
});
if (Meteor.isClient) {

  Template.home.helpers({
    buttons: [
      {title: "Computer Science"},
      {title: "Business"},
      {title: "News"},
      {title: "nrop"},
      {title: "YouTube"}
    ]
  });

  Template.button.events({
    'click .start': function () {
      Test();
      //Router.go('/register');
    }
  });
};

var Test = function() {
  var unorderedList = document.getElementById('myList');
  var listItems = unorderedList.getElementsByTagName('li');

  for (var button, i = 0; i < listItems.length; i++){
    console.log(button, i);
  }
}




