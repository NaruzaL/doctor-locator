var apiKey = require('./../.env').apiKey;

Doctor = function(doctorName, address, phone){
  this.name = doctorName;
  this.address = address;
  this.phone = phone;
};


Doctor.prototype.getDoctors = function(medicalIssue, displayDoctors) {
  $.get('https://api.betterdoctor.com/2016-03-01/doctors?query='+ medicalIssue+'&location=45.5231%2C-122.6765%2C%205&user_location=45.5231%2C-122.6765&skip=0&limit=20&user_key='+apiKey)
   .then(function(result) {
     var allDoctors = [];
     for (var i = 0; i < result.data[0].practices.length; i++){
       var newDoctor = new Doctor(doctorName = result.data[0].practices[i].name, address =  result.data[0].practices[i].visit_address.street + ", " + result.data[0].practices[i].visit_address.city + ", " + result.data[0].practices[i].visit_address.zip , phone = result.data[0].practices[i].phones[0].number);
       allDoctors.push(newDoctor);
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
