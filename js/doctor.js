var apiKey = require('./../.env').apiKey;

Doctor = function(doctorName, address, phone){
  this.name = doctorName;
  this.address = address;
  this.phone = phone;
};

// Doctor.prototype.getUnique = function(allDoctors){
//   var eachUniqueDoctor = [];
//   for (var i = 0; i < allDoctors.length; i++){
//     if (allDoctors[i].name !== allDoctors[i-1].name){
//       allDoctors[i-1].push(eachUniqueDoctor)
//     }
//   }
// }

Doctor.prototype.getDoctors = function(medicalIssue, displayDoctors) {
  $.get('https://api.betterdoctor.com/2016-03-01/doctors?query='+ medicalIssue+'&location=45.5231%2C-122.6765%2C%205&user_location=45.5231%2C-122.6765&skip=0&limit=20&user_key='+apiKey)
  .then(function(result) {
    var allDoctors = [];
    for (var i = 0; i < result.data.length; i++){
      for (var ii = 0; ii < result.data[i].practices.length; ii++){
        var newDoctor = new Doctor(doctorName = result.data[i].practices[ii].name, address =  result.data[i].practices[ii].visit_address.street + ", " + result.data[i].practices[ii].visit_address.city + ", " + result.data[i].practices[ii].visit_address.zip , phone = result.data[i].practices[ii].phones[0].number);
        allDoctors.push(newDoctor);
        }
      }

     displayDoctors(allDoctors);
      // console.log(allDoctors[0], allDoctors[1]);
      // console.log(JSON.stringify(result));
      // console.log(JSON.stringify(result.data));
      // console.log(JSON.stringify(result.data[0].practices.length));
      // console.log(JSON.stringify(result.data[0].practices[0].name));
    })
   .fail(function(error){
      $('#responses').text(error.responseJSON.message);
    });
};


exports.doctorModule = Doctor;
