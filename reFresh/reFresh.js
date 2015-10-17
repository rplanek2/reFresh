//var namespace = {'Computer Science', 'News', 'Business', 'UrbanDictionary'};
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

      //dom.push(/*url*/);

      artCount++;
      total++;  
    }
    artCount = 0; /*reset */
  }
};


Tasks = new Mongo.Collection("tasks");

if (Meteor.isClient) {
  // This code only runs on the client
  Template.body.helpers({
    tasks: function () {
      // Show newest tasks at the top
      return Tasks.find({}, {sort: {createdAt: -1}});
    }
  });

  Template.body.events({
    "submit .new-task": function (event) {
      // Prevent default browser form submit
      event.preventDefault();

      // Get value from form element
      var text = event.target.text.value;

      // Insert a task into the collection
      Tasks.insert({
        text: text,
        createdAt: new Date() // current time
      });

      // Clear form
      event.target.text.value = "";
    }
  });
}