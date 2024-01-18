function getId(id) {
  return document.getElementById(id);
}

function Validate() {
  ////studentNumber
  this.va_number = function (value, err) {
    var regex_number = /^[0-9]*$/;
    if (value = '') {
      getId(err).innerHTML = 'StudentNumber cant be empty';
      return false;
    } else if (regex_number.test(value) == false) {
      getId(err).innerHTML = 'Student number have to be number';
      return false;
    } else {
      getId(err).innerHTML = '';
      return true;
    }
  };
  ////studentName
  this.va_name = function (value, err) {
    if (value == '') {
      getId(err).innerHTML = "student's name can't be empty";
      return false;
    } else if (value.length > 10) {
      getId(err).innerHTML = "Student's name can't be over 10 letters .";
      return false;
    } else {
      getId(err).innerHTML = '';
      return true;
    }
  };
  ////courses's grade

  this.va_average = function (value, err) {
    var regex_number = /^[0-9]*$/;
    if (value == '') {
      getId(err).innerHTML = 'grade can not be empty';
      return false;
    } else if (value < 1 || value > 10) {
      getId(err).innerHTML = 'grades have to be between 1 to 10';
      return false;
    } else if (regex_number.test(value) == false) {
      getId(err).innerHTML = 'grades have to be number';
      return false;
    } else {
      getId(err).innerHTML = '';
      return true;
    }
  };
}
