document.getElementById("homeLink").addEventListener("click", homeLink);

const id = getId();
console.log("The id is" + id);

function getId() {
  const url = window.location.href;
  const pos = url.search("=");
  const id = url.slice(pos + 1);
  return id;
}

function getContact() {
  fetch(rootPath + "controller/get-contacts/?id=" + id)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      displayOutput(data);
      console.log(data);
    });
}

function homeLink() {
  window.open("index.html", "_self");
}

function displayOutput(data) {
  let avatarImg = `
  <img src="${rootPath}/controller/uploads/${data[0].avatar}" width="200" />
  `;
  document.getElementById("avatarImage").innerHTML = avatarImg;

  document.getElementById("firstname").value = data[0].firstname;
  document.getElementById("lastname").value = data[0].lastname;
  document.getElementById("mobile").value = data[0].mobile;
  document.getElementById("email").value = data[0].email;
}
