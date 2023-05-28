document.getElementById('project').innerHTML = localStorage.getItem('project').replace('null', `
<div class='container'>
<h3>Create a Project</h3>
<button class='bx bx-plus'> Create</button>
</div>
<br>
`)
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