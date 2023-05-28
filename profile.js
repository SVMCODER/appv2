document.getElementById('info').innerHTML = `
<input type="text" name="" id='name' value='${localStorage.getItem('name')}' placeholder='Your name'> <br> <br>
<input type="number" name="" id='admno' minlength='4' maxlength='4 'value='${localStorage.getItem('admno')}' placeholder='Admission Number'> <br> <br>
<input type="text" name="" id='frname' value='${localStorage.getItem('frname')}' placeholder="Father's Name"> <br> <br>
<input type="text" name="" id='mrname' value='${localStorage.getItem('mrname')}' placeholder="Mother's Name">
`
function save() {
  uname = document.getElementById('name').value;
  admno = document.getElementById('admno').value;
  frname = document.getElementById('frname').value;
  mrname = document.getElementById('mrname').value;
  if (uname == '' || admno == '' || frname == '' || mrname == '') {
    swal("Invalid", "Please check the following:\n1. Cannot be empty\n2. Admission Number must have atleast 4 characters", "warning");
  }
  else {
    localStorage.setItem('name',uname)
    localStorage.setItem('admno',admno)
    localStorage.setItem('frname',frname)
    localStorage.setItem('mrname',mrname)
    swal("Saved!", "Data updated successfully", "success");
  }
}
function logout() {
    swal({
          title: "Are you sure?",
          text: "You will be logged out and all your projects will be deleted!",
          type: "warning",
          showCancelButton: true,
          confirmButtonColor: '#DD6B55',
          confirmButtonText: 'Logout',
          cancelButtonText: "Cancel",
          closeOnConfirm: false,
          closeOnCancel: false
      },
      function(isConfirm){
      if (isConfirm){
        localStorage.removeItem('loggedin')
        localStorage.removeItem('name')
        localStorage.removeItem('project')
        localStorage.removeItem('badge')
        localStorage.removeItem('role')
        localStorage.removeItem('verified')
        localStorage.removeItem('method')
        swal("Logging Out", "Please wait", "success");
        setTimeout(() => {
          window.location.replace('/')
        }, 1400);
      } else {
        swal("Cancelled", "You projects are safe!", "error");
      }
      });
  }