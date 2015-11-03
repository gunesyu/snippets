$("document").ready(function() {
    // basic template example
    var template = $("#itemTemplate").html();
    var result = Mustache.render(template, {
        "item" : "Whisper 4000 in-home heater and dog walker",
        "description" : "Walk your dog and heat your house at the same time? Now you can, with the Whisper 4000 Home Heating system / Dog Treadmill!",
        "price" : 895.99,
        "inStock" : true,
        "quantity" : 100
    } );
    $("#container").html(result);
    // basic example ends


    // sections example
    var template2 = $("#itemTemplate2").html();
    var result2 = Mustache.render(template2, {
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
       }]
    });
    $("#container2").html(result2);
    // sections example ends


    // conditionals example
    var template3 = $("#itemTemplate3").html();
    var result3 = Mustache.render(template3, {
        "item" : "Whisper 4000 in-home heater and dog walker",
        "description" : "Walk your dog and heat your house at the same time? Now you can, with the Whisper 4000 Home Heating system / Dog Treadmill!",
        "price" : 895.99,
        "inStock" : true,
        "quantity" : 100
    } );
    $("#container3").html(result3);
    // conditionals example ends

    // functions example
    var template4 = $("#itemTemplate4").html();
    var prodData = { "items" : [
            { name : "product 1", price : 125.00 },
            { name : "product 2", price : 89.00 },
            { name : "product 3", price : 209.00 },
            { name : "product 4", price : 415.00 } ]
    };
    prodData.total = function() {
        return Math.round((this.price * 1.08) * 100) / 100;
    };
    prodData.decorate = function () {  
    // returns directly to mustache, so we use this as a section
        return function(text, render) {
                return "<u>" + render(text) + "</u>";
        };
    }; 
    // render is a mustache function
    // so whatever we put inside this section appears to be the "text" argument
    // and it puts an underline (<u>) to every one of them
    var result4 = Mustache.render(template4, prodData);
    $("#container4").html(result4);
    // functions example ends

});