function addBirthday() {
    let myMonth = document.getElementById("myMonth").value;
    let myDay = document.getElementById("myDay").value;
    let myYear = document.getElementById("myYear").value;
    document.getElementById("addBirthday").innerHTML = "Your birthday is: " + myMonth + " " + myDay + ", " + myYear;
  }