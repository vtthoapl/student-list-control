function StudentList() {
  this.studentArray = [];
  var getData = JSON.parse(localStorage.getItem('allstudentlist'));
  if (getData !== null) {
    this.studentArray = getData;
  } else {
    console.log('There is no student');
  }
  this.addNewStudent = function (stu) {
    this.studentArray.push(stu);
  };
  // HOI TRI
  this.findStudentNumber = function (studentNumber) {
    let studentNumberIndex = '';
    for (var i = 0; i < this.studentArray.length; i++) {
      if (studentNumber == this.studentArray[i].number) {
        return (studentNumberIndex = i);
      }
    }
  };

  this.deleteStudent = function (number) {
    var index = this.findStudentNumber(number);
    if (index !== '') {
      this.studentArray.splice(index, 1);
    }
  };
}
