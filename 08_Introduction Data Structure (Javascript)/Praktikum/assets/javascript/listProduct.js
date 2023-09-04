document.addEventListener("DOMContentLoaded", function () {
  const userTable = document.getElementById("productList");
  const tbody = userTable.querySelector("tbody");
  const productNameInput = document.getElementById("validationDefault01");
  const productPriceInput = document.getElementById("validationDefault08");
  const productCategoryInput = document.getElementById("validationDefault02");
  const productImageInput = document.getElementById("validationDefault03");
  const productFreshnessInput = document.getElementById("validationDefault04");
  const productDescriptionInput = document.getElementById(
    "validationDefault07"
  );
  const deleteButton = document.getElementById("dlt");
  const searchButton = document.getElementById("src");
  const searchProductNameInput = document.getElementById("textSearch");
  let userData = [];

  function addUserToTable(data) {
    const newRow = document.createElement("tr");
    newRow.innerHTML = `
      <th scope="row">${userData.length + 1}</th>
      <td>${data.validationDefault01}</td>
      <td>${data.validationDefault02}</td>
      <td>${data.validationDefault03}</td>
      <td>${data.validationDefault04}</td>
      <td>${data.validationDefault07}</td>
      <td>${data.validationDefault08}</td>
    `;
    tbody.appendChild(newRow);
    userData.push(data);
  }

  // Fungsi untuk menghapus data terakhir dari tabel
  function deleteUser() {
    if (userData.length > 0) {
      userData.pop();
      tbody.removeChild(tbody.lastChild);
      alert("data deleted successfully");
    }
  }

  function searchUser() {
    const productNameToSearch = searchProductNameInput.value;
    const user = userData.find(
      (data) => data.validationDefault01 === productNameToSearch
    );
    if (user) {
      alert(
        `Data found!\nProduct Name: ${user.validationDefault01}\nProduct category: ${user.validationDefault02}\nProduct Image: ${user.validationDefault03}\nProduct Freshness: ${user.validationDefault04}\nAdditional Description: ${user.validationDefault07}\nProduct Price: ${user.validationDefault08}`
      );
    } else {
      alert("Data not found!");
    }
  }

  // Event listener untuk tombol Delete
  deleteButton.addEventListener("click", deleteUser);

  // Event listener untuk tombol Search
  searchButton.addEventListener("click", searchUser);

  // Event listener untuk form input
  document.querySelector("form").addEventListener("submit", function (e) {
    e.preventDefault();
    const formData = {
      validationDefault01: productNameInput.value,
      validationDefault02: productCategoryInput.value,
      validationDefault03: productImageInput.value,
      validationDefault04: productFreshnessInput.value,
      validationDefault07: productDescriptionInput.value,
      validationDefault08: productPriceInput.value,
    };
    addUserToTable(formData);
    // Reset form input
    productNameInput.value = "";
    productCategoryInput.value = "";
    productImageInput.value = "";
    productFreshnessInput.value = "Choose...";
    productDescriptionInput.value = "";
    productPriceInput.value = "";
  });
});
