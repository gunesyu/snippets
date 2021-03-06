$("document").ready(function() {
  
  // basic example
  var template = $("#itemTemplate").html();
  var renderer = Handlebars.compile(template);
  var result = renderer({
      "item" : "Whisper 4000 in-home heater and dog walker",
      "description" : "Walk your dog and heat your house at the same time? Now you can, with the Whisper 4000 Home Heating system / Dog Treadmill!",
      "price" : 895.99,
      "inStock" : true,
      "quantity" : 100
  });
  $("#container").html(result);
  // basic example ends

  // conditionals and loops example
  var template2 = $("#itemTemplate2").html();
  var renderer2 = Handlebars.compile(template2);
  var result2 = renderer2({
     "employees" : [{
        "name" : "Henry Handsome",
        "phone" : "+1-212-555-1234",
        "email" : "pensive@example.com",
        "title" : "Senior VP of Basketweaving",
        "fulltime" : true
     }, {
        "name" : "Penelope Persistent",
        "phone" : "+1-212-555-8000",
        "email" : "truthful@example.com",
        "title" : "Principal Understudy",
        "fulltime" : false
     }, {
        "name" : "Sam Serendipity",
        "phone" : "+1-212-555-9876",
        "email" : "helpful@example.com",
        "title" : "Chief Cook and Bottle Washer",
        "fulltime" : true
     }, {
        "name" : "Tom Terriffic",
        "phone" : "+1-212-555-0011",
        "email" : "grumpy@example.com",
        "title" : "Janitor",
        "fulltime" : false
     }]});
  $("#container2").html(result2);
  // conditionals and loops example ends

  // built-in helpers example
  var template3 = $("#itemTemplate3").html();
  var renderer3 = Handlebars.compile(template3);
  var result3 = renderer3({
      "item" : "Whisper 4000 in-home heater and dog walker",
      "description" : "Walk your dog and heat your house at the same time? Now you can, with the Whisper 4000 Home Heating system / Dog Treadmill!",
      "data" : {
        "price" : 895.99,
        "inStock" : true,
        "quantity" : 100
      }
  });
  $("#container3").html(result3);
  // helpers example ends

  // custom helpers example
  Handlebars.registerHelper("prodQuantity", function (prodData) {
    if (prodData.quantity >= 100)
      return "We currently have a large amount in stock.";
    else
      return "Hurry! We don't have many left in stock";    
  });
  var template4 = $("#itemTemplate4").html();
  var renderer4 = Handlebars.compile(template4);
  var result4 = renderer4({
      "item" : "Whisper 4000 in-home heater and dog walker",
      "description" : "Walk your dog and heat your house at the same time? Now you can, with the Whisper 4000 Home Heating system / Dog Treadmill!",
      "data" : {
        "price" : 895.99,
        "inStock" : true,
        "quantity" : 100
      }
  });
  $("#container4").html(result4);
  // helpers example ends

});