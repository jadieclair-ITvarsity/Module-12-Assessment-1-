document.getElementById("refresh").addEventListener("click", fetchContacts);
document.getElementById("addContact").addEventListener("click", addContact);

function fetchContacts() {
  fetch(rootPath + "controller/get-contacts/")
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      displayOutput(data);
    });
}

function displayOutput(data) {
  let output = "<table>";
  for (i in data) {
    output += `
              <tr onclick="editContact(${data[i].id})">
                <td><img src="${rootPath}controller/uploads/${data[i].avatar}" width="40"/></td>
                  <td><h5>${data[i].firstname}</h5></td>
                  <td><h5>${data[i].lastname}</h5></td>
              </tr>
`;
  }

  output += "</table>";
  document.getElementById("table").innerHTML = output;
}

function addContact() {
  window.open("add-contact.html", "_self");
}

function editContact(id) {
  window.open("edit-contact.html?id=" + id, "_self");
}
