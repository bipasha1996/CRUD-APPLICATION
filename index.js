let data = [
  {
    id: 1,
    name: " Jhon",
    address: "123,Russel Street,California",
    email: "Jhon123@gmail.com",
    contact: "+144087563898",
  },
  {
    id: 2,
    name: " Jenny",
    address: "456,Central street,Arizona",
    email: "Jenny123@gmail.com",
    contact: "+13444098730",
  },
  {
    id: 3,
    name: " Harry",
    address: "323,Park Lane,Florida",
    email: "Harry@gmail.com",
    contact: "+14365436580",
  },
  {
    id: 4,
    name: " Illa",
    address: "325,Park Lane,Florida",
    email: "Illa456@gmail.com",
    contact: "+14409459860",
  },
  {
    id: 5,
    name: " Ron",
    address: "456,Central street,Arizona",
    email: "Ron@gmail.com",
    contact: "+13304876980",
  },
];

function readAll() {
  var tableData = document.querySelector(".tableData");
  var elements = "";

  data.map(
    (obj) =>
      (elements += `<tr>
        <td> ${obj.name}</td>
        <td> ${obj.address}</td>
        <td> ${obj.email}</td>
        <td> ${obj.contact}</td>
        <td>
        <button onclick={edit(${obj.id})}>Update</button>
        <button onclick={delet(${obj.id})}>Delete</button>
        </td>
        </tr>`)
  );
  tableData.innerHTML = elements;
}
function delet(id) {
  data = data.filter((d) => d.id !== id);
  readAll();
}
function update() {
  var name = document.querySelector(".uname").value;
  var address = document.querySelector(".uaddress").value;
  var email = document.querySelector(".uemail").value;
  var contact = document.querySelector(".ucontact").value;
  var id = parseInt(document.querySelector(".id").value);
  var index = data.findIndex((d) => d.id === id);
  data[index] = { id, name, address, email, contact };

  document.querySelector(".createForm").style.display = "block";
  document.querySelector(".updateForm").style.display = "none";
  readAll();
}

function edit(id) {
  document.querySelector(".createForm").style.display = "none";
  document.querySelector(".updateForm").style.display = "block";
  var object = data.find((obj) => obj.id === id);

  document.querySelector(".uname").value = object.name;
  document.querySelector(".uaddress").value = object.address;
  document.querySelector(".uemail").value = object.email;
  document.querySelector(".ucontact").value = object.contact;
  document.querySelector(".id").value = object.id;
}

function create() {
  var name = document.querySelector(".name").value;
  var address = document.querySelector(".address").value;
  var email = document.querySelector(".email").value;
  var contact = document.querySelector(".contact").value;
  var obj = {
    id: 5,
    name: name,
    address: address,
    email: email,
    contact: contact,
  };
  data.push(obj);
  readAll();

  var name = (document.querySelector(".name").value = "");
  var address = (document.querySelector(".address").value = "");
  var email = (document.querySelector(".email").value = "");
  var contact = (document.querySelector(".contact").value = "");
}
