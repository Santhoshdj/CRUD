var saveDetails = function(){
	var details = {};
	details.firstName = document.getElementById('firstName').value;
	details.lastName = document.getElementById('lastName').value;
	details.email = document.getElementById('email').value;
	details.mobileNumber = document.getElementById('mobileNumber').value;
	details.city = document.getElementById('city').value;
    details.pinCode = document.getElementById('pinCode').value;
     	if(validateBeforeSignup(details)){
     ajaxCallForSaveDetails(details, function(err, response){
			if(err){
				console.log(err);
			       }
			else if(response){
				if(response.data){
				}
				else
					alert("Saved successfully")
					window.location.href = '/viewDetails';
			}
		});
 }
 
 }

var ajaxCallForSaveDetails = function(details, cb){
	jQuery.ajax({
		method: 'POST',
		url: '/saveDetails',
		data: details
	}).done(function (response) {
        cb(null,response);
    }).fail(function (error) {
		cb(error);
	});
	
}


var editDetails = function(event){
	var details = {};
	details.id = document.getElementById('id').value;
	details.firstName = document.getElementById('firstName').value;
	details.lastName = document.getElementById('lastName').value;
	details.email = document.getElementById('email').value;
	details.mobileNumber = document.getElementById('mobileNumber').value;
	details.city = document.getElementById('city').value;
    details.pinCode = document.getElementById('pinCode').value;
	updatedata(details, function(err, response){
			if(err){
				console.log(err);
			}
			else if(response){
				if(response.data){
				}
				else
					alert("Details Updated successfully")
					window.location.href = '/viewDetails';
			}
		});
}


var updatedata = function(details, cb){
	jQuery.ajax({
		method: 'POST',
		url: '/user/updatedata',
		data: details
	}).done(function (response) {
        cb(null,response);
  }).fail(function (error) {
		cb(error);
	});
	
}

var deleteDetails = function(event){
		jQuery.ajax({
			method: "DELETE",
			url:"/deleteDetails/"+event
		}).done(function (response){
			alert("Deleted successfully")
	      window.location.href = '/viewDetails';
	     }).fail(function(error) {
		  cb(error);
	     });
		
	}


function isValidEmail(value){
    var emailExpression = /^[\w\-\.\+]+\@[a-zA-Z0-9\.\-]+\.[a-zA-z0-9]{2,4}$/;
    if(value.toString().length === 0 || !emailExpression.test(value))
      return 'Enter valid email id';
    return true;
}

	var validateBeforeSignup = function(details){
	var isValid = false;
	jQuery('.signup-sheet input').css('border-bottom-color', '');

	if(details){
		if(details.firstName)
			var firstName = true;
		else
			document.getElementById('firstName').style.borderBottomColor = 'red';
		if(details.lastName)
			var lastName = true;
		else
			document.getElementById('lastName').style.borderBottomColor = 'red';

		if(details.email && isValidEmail(details.email) === true)
			var email = true;
		else{
			document.getElementById('email').style.borderBottomColor = 'red';
			// alert("Enter valid email id")
		}

		if(details.mobileNumber)
			var mobileNumber = true;
		else
			document.getElementById('mobileNumber').style.borderBottomColor = 'red';

		if(details.city)
			var city = true;
		else
			document.getElementById('city').style.borderBottomColor = 'red';

		if(details.pinCode)
			var pinCode = true;
		else
			document.getElementById('pinCode').style.borderBottomColor = 'red';
		if(firstName && email && lastName && mobileNumber && city && pinCode)
			isValid = true;
	}
	return isValid;
}





