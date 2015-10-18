//ROUTER TO HOME TEMPLATE
Router.route('/', function () {
  this.render('Home');
});

//ROUTERS TO ARTICLE TEMPLATES
Router.route('/ComputerScience');
Router.route('/Business');
Router.route('/News');
Router.route('/nrop');
Router.route('/UrbanDictionary');

if (Meteor.isClient) {

  //SETS TITLE OF BUTTONS
  Template.home.helpers({
    buttons: [
      {title: "ComputerScience"},
      {title: "Business"},
      {title: "News"},
      {title: "nrop"},
      {title: "UrbanDictionary"}
    ]
  });

  //ACTION LISTENER FOR BUTTONS
  Template.button.events({
    'click .start': function () {
      Router.go('/' + this.title);
    }
  });

  Template.ComputerScience.onCreated(){  
    //console.log(this);
    var x = Template.instance();

    console.log(x.name);

    console.log(x.innerHTML);
    
  });
  Template.Business.helpers({

  });
  Template.News.helpers({

  });
  Template.nrop.helpers({

  });
  Template.UrbanDictionary.helpers({

  });










};

var Test = function() {
  var unorderedList = document.getElementById('myList');
  var listItems = unorderedList.getElementsByTagName('li');

  for (var button, i = 0; i < listItems.length; i++){
    console.log(button, i);
  }
}

var ComputerScience[5];
var Business[5];
var News[5];
var nrop[5];
var UrbanDictionary = "http://www.urbandictionary.com/";

var dom = {ComputerScience, Business, News, nrop, UrbanDictionary};

search = function(query){
  var total = 0;
  var artCount = 0;
  var theQuery = dom[query];
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
    artCount = 0;
  }
};
