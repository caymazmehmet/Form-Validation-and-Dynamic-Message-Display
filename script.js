let inMail = document.getElementById("in-mail");
let inName = document.getElementById("in-name");
let inSurname = document.getElementById("in-surname");
let inComment = document.getElementById("in-comment");
const submitBtn = document.getElementById("submit-btn");
let stage = document.getElementsByClassName("messages")[0];

let mailValue = inMail.ariaValueMax;

let elements = "";

submitBtn.addEventListener("click", function () {
  if (!inMail.value.includes("@")) {
    alert("Your mail must contain '@'");
    return;
  }
  if (inMail.value === "") {
    alert("Please Enter Valid Mail");
    return;
  } else if (inName.value === "") {
    alert("Please Enter Name");
    return;
  } else if (inSurname.value === "") {
    alert("Please Enter Surname");
    return;
  } else if (inComment.value === "") {
    alert("Please fill out your comment!");
    return;
  }
  elements += `
<div class="card">
  <h3 id="text-fullname"> ${inName.value} ${inSurname.value}</h3>
  <p id="text-mail"><a href="mailto:${inMail.value}"}">${inMail.value}</a></p>
  <p id="text-comment"> ${inComment.value}</p>
</div>
 `;
  postMessage();
});

function postMessage() {
  stage.innerHTML = elements;
  inMail.value = "";
  inName.value = "";
  inSurname.value = "";
  inComment.value = "";
}
