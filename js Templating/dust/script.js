function renderTemplates(e) {

   // basic example
   var templContent = document.getElementById('itemTemplate').innerHTML;
   var dataTemplate = dust.compile(templContent, "myTmpl");
   dust.loadSource(dataTemplate);
   var dataObj = {
      "name" : "Henry Handsome",
      "phone" : "+1-212-555-1234",
      "email" : "pensive@example.com",
      "title" : "Senior VP of Basketweaving",
      "fulltime" : true
   };
   dust.render("myTmpl", dataObj, function (err, res) {
      document.getElementById('container').innerHTML = res;
   });
   // basic example ends

   // sections example
   $.getJSON("templateData.json", function(dataObj2){
      var templContent2 = document.getElementById('itemTemplate2').innerHTML;
      var dataTemplate2 = dust.compile(templContent2, "myTmpl2");
      dust.loadSource(dataTemplate2);
      dust.render("myTmpl2", dataObj2, function (err, res) {
         document.getElementById('container2').innerHTML = res;
      });
   });
   // sections example ends

   // context and path example
   var templContent3 = document.getElementById('itemTemplate3').innerHTML;
   var dataTemplate3 = dust.compile(templContent3, "myTmpl3");
   dust.loadSource(dataTemplate3);
   var dataObj3 = {
      "employee" : {
         "name" : "Henry Handsome",
         "phone" : "+1-212-555-1234",
         "email" : "pensive@example.com",
         "title" : "Senior VP of Basketweaving",
         "fulltime" : true,
         "department" : {
            "name" : "Engineering",
            "cost_center" : 90125
         }
      }
   };
   dust.render("myTmpl3", dataObj3, function (err, res) {
      document.getElementById('container3').innerHTML = res;
   });
   // context and path example ends

   // helpers example
   $.getJSON("templateData.json", function(dataObj4){
      var templContent4 = document.getElementById('itemTemplate4').innerHTML;
      var dataTemplate4 = dust.compile(templContent4, "myTmpl4");
      dust.loadSource(dataTemplate4);
      dust.render("myTmpl4", dataObj4, function (err, res) {
         document.getElementById('container4').innerHTML = res;
      });
   });
   // helpers example ends

}

window.addEventListener("load", renderTemplates);