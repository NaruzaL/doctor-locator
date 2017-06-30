var Doctor = require('./../js/doctor.js').doctorModule;

var displayDoctors = function(allDoctors){
  allDoctors.forEach(function(doctor){
    $('#responses').append('<p><strong>' + doctor.name + '</strong></p>');
    $('#responses').append('<p>' + "Address:" + doctor.address + '</p>');
    $('#responses').append('<p>' + "Phone:" + doctor.phone + '</p><br>');
  });
};


$(document).ready(function(){
  var doctorObject = new Doctor();
  $('#responses').hide();
  $("form#symptom").submit(function(event){
    event.preventDefault();
    $('#responses').show();
    $('#responses').empty();
    var medicalIssue = $("#medicalIssue").val();
    doctorObject.getDoctors(medicalIssue, displayDoctors);
  });
});


// var eachUniqueDoctor = [];
// for (var i = 0; i < allDoctors.length; i++){
//   if (allDoctors[i].name !== allDoctors[i-1].name && allDoctors[i].phone !== allDoctors[i-1].phone){
//     allDoctors[i-1].push(eachUniqueDoctor)
//   }
// }
