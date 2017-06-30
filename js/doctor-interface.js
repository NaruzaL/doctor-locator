var Doctor = require('./../js/doctor.js').doctorModule;

var displayDoctors = function(allDoctors){
  $('#responses').text(allDoctors);
};


$(document).ready(function(){
  var doctorObject = new Doctor();
  $("form#symptom").submit(function(event){
    event.preventDefault();
    var medicalIssue = $("#medicalIssue").val();
    doctorObject.getDoctors(medicalIssue);
  });
});
