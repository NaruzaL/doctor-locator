var Doctor = require('./../js/doctor.js').doctorModule;

var displayDoctors = function(allDoctors){
  allDoctors.forEach(function(doctor){
    $('#responses').append('<p>' + doctor.name + '</p>');
    $('#responses').append('<p>' + "Address:" + doctor.address + '</p>');
    $('#responses').append('<p>' + "Phone:" + doctor.phone + '</p><br>');

  });
};


$(document).ready(function(){
  var doctorObject = new Doctor();
  $("form#symptom").submit(function(event){
    event.preventDefault();
    $('#responses').empty();
    var medicalIssue = $("#medicalIssue").val();
    doctorObject.getDoctors(medicalIssue, displayDoctors);
  });
});
