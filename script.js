function getId(id) {
  return document.getElementById(id);
}
var validate = new Validate();
var list = new StudentList();

function addStudent() {
  var number = getId('txtMaSV').value;
  var name = getId('txtTenSV').value;
  var mathscore = getId('txtDiemToan').value;
  var physics = getId('txtDiemLy').value;
  var chemitry = getId('txtDiemHoa').value;

  //if all validates are true, then adding student
  var va_number = validate.va_number(number, 'divMaErr');
  var va_name = validate.va_name(name, 'divNameErr');
  var va_math = validate.va_average(mathscore, 'divToanErr');
  var va_physics = validate.va_average(physics, 'divLyErr');
  var va_chemistry = validate.va_average(chemitry, 'divHoaErr');
  var averageScore =
    (Number(mathscore) + Number(physics) + Number(chemitry)) / 3;

  if (
    va_number == true &&
    va_name == true &&
    va_math == true &&
    va_physics == true &&
    va_chemistry == true
  ) 
  {
    var student = new OneStudent(
      number,
      name,
      mathscore,
      physics,
      chemitry,
      averageScore
    );
    list.addNewStudent(student);
    createTable(list.studentArray);
    localStorage.setItem('allstudentlist', JSON.stringify(list.studentArray));
    getId('txtMaSV').value = '';
    getId('txtTenSV').value = '';
    getId('txtEmail').value = '';
    getId('txtPass').value = '';
    getId('txtNgaySinh').value = '';
    getId('khSV').value = '';
    getId('txtDiemToan').value = '';
    getId('txtDiemLy').value = '';
    getId('txtDiemHoa').value = '';
  }
}
var getData = JSON.parse(localStorage.getItem('allstudentlist'));
if (getData !== null) {
  createTable(getData);
} else {
  alert("localstorage is empty, no student's information");
}

function createTable(array) {
  var content = '';
  for (var i = 0; i < array.length; i++) {
    content += `
        <tr>
        <td>${array[i].number}</td>
        <td>${array[i].name}<td>
        <td>${array[i].mathscore}<td>
        <td>${array[i].physics}<td>
        <td>${array[i].chemitry}<td>
        <td>${array[i].averageScore}<td>
        <td><button class='btn btn-danger' onclick='editStudent(${array[i].number})'>Edit</td>
        <td><button class='btn btn-danger' onclick='deleteStudent(${array[i].number})'>Delete</td>
        `;
  }
  getId('tbodySinhVien').innerHTML = content;
}

function deleteStudent(number) {
  list.deleteStudent(number);
  createTable(list.studentArray);
  localStorage.setItem('allstudentlist', JSON.stringify(list.studentArray));
}

function editStudent(stunumber) {
    var studentArray = list.studentArray
    let index = ''
    let student = ''
    for(var i = 0; i <studentArray.length; i++) {
        if(stunumber == list.studentArray) {
            student =  studentArray[i]
        }
    }
    getId('txtMaSV').value = student.number
  getId('txtTenSV').value = student.name;
  getId('txtDiemToan').value = student.mathscore;
  getId('txtDiemLy').value = student.physics;
  getId('txtDiemHoa').value = student.chemitry;
  getId('btnUpdate').style.display = 'block';
  getId('btnAdd').setAttribute('disabled', true);
}

///////Setattribute