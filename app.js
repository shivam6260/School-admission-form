const submit = document.querySelector(".btn");
submit.addEventListener("click", () => {
  //First Name
  const firstname = document.querySelector(".fisrtname").value;
  if (firstname === "") {
    document.querySelector(".span-1").innerHTML =
      " **Please enter your first name!";
    document.querySelector(".btn").classList.add("button");
    return false;
  }
  if (firstname.length < 2 || firstname.length > 20) {
    document.querySelector(".span-1").innerHTML =
      " **Character Size between 2-20";
    document.querySelector(".btn").classList.add("button");
    return false;
  }
  if (!isNaN(firstname)) {
    document.querySelector(".span-1").innerHTML = " **Numbers Not Allowed!";
    document.querySelector(".btn").classList.add("button");
    return false;
  }

  if (firstname !== "" && firstname.length >= 2 && isNaN(firstname)) {
    document.querySelector(".span-1").innerHTML = "";
    document.querySelector(".btn").classList.add("btn");
  }

  //Last Name
  const lastname = document.querySelector(".lastname").value;
  if (lastname === "") {
    document.querySelector(".span-2").innerHTML =
      " **Please enter your Last name!";
    document.querySelector(".btn").classList.add("button");
    return false;
  }
  if (lastname.length < 2 || lastname.length > 20) {
    document.querySelector(".span-2").innerHTML =
      " **Character Size between 2-20";
    document.querySelector(".btn").classList.add("button");
    return false;
  }
  if (!isNaN(lastname)) {
    document.querySelector(".span-2").innerHTML = " **Numbers Not Allowed!";
    document.querySelector(".btn").classList.add("button");
    return false;
  }

  if (lastname !== "" && lastname.length >= 2 && isNaN(lastname)) {
    document.querySelector(".span-2").innerHTML = "";
    document.querySelector(".btn").classList.add("btn");
  }

  //Class
  const Class = document.querySelector(".Class").value;
  if (Class === "") {
    document.querySelector(".span-3").innerHTML = " **Please enter your Class!";
    document.querySelector(".btn").classList.add("button");
    return false;
  }
  if (Class.length > 2) {
    document.querySelector(".span-3").innerHTML =
      " **It only include Class and Section!";
    document.querySelector(".btn").classList.add("button");
    return false;
  }
  if (Class !== "" && Class.length === 2) {
    document.querySelector(".span-3").innerHTML = "";
    document.querySelector(".btn").classList.add("btn");
  }

  //Year Of Passing
  const YOP = document.querySelector(".YOP").value;
  if (YOP === "") {
    document.querySelector(".span-4").innerHTML =
      " **Please enter your Year of Passing!";
    document.querySelector(".btn").classList.add("button");
    return false;
  }

  if (isNaN(YOP)) {
    document.querySelector(".span-4").innerHTML =
      " **Only Numbers are allowed!";
    document.querySelector(".btn").classList.add("button");
    return false;
  }
  if (YOP > 2017) {
    document.querySelector(".span-4").innerHTML = " **Must be Less than 2017";
    document.querySelector(".btn").classList.add("button");
    return false;
  }
  if (YOP !== "" && YOP < 2017 && !isNaN(YOP)) {
    document.querySelector(".span-4").innerHTML = "";
    document.querySelector(".btn").classList.add("btn");
  }

  //Percentage
  const percentage = document.querySelector(".percentage").value;
  if (percentage === "") {
    document.querySelector(".span-5").innerHTML =
      " **Please enter your Percentage!";
    document.querySelector(".btn").classList.add("button");
    return false;
  }
  if (isNaN(percentage)) {
    document.querySelector(".span-5").innerHTML =
      " **Only Numbers are allowed!";
    document.querySelector(".btn").classList.add("button");
    return false;
  }
  if (percentage.length > 2) {
    document.querySelector(".span-5").innerHTML =
      " **Enter a value less than 100";
    document.querySelector(".btn").classList.add("button");
    return false;
  }
  if (percentage !== "" && percentage.length < 3) {
    document.querySelector(".span-5").innerHTML = "";
    document.querySelector(".btn").classList.remove("button");
    document.querySelector(".btn").classList.add("btn");
  }

  alert("Your response Added!");
});
