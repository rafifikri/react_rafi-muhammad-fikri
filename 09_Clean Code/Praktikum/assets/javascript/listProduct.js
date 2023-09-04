document.addEventListener("DOMContentLoaded", function () {
  const userTable = document.getElementById("productList");
  const tbody = userTable.querySelector("tbody");
  const productNameInput = document.getElementById("productName");
  const productPriceInput = document.getElementById("productPrice");
  const productCategoryInput = document.getElementById("productCategory");
  const productImageInput = document.getElementById("productImage");
  const productFreshnessInput = document.getElementById("productFreshness");
  const productDescriptionInput = document.getElementById(
    "additionalDescription"
  );
  const deleteButton = document.getElementById("delete");
  const searchButton = document.getElementById("search");
  const searchProductNameInput = document.getElementById("searchName");
  let userData = [];

  function addUserToTable(data) {
    const newRow = document.createElement("tr");
    newRow.innerHTML = `
      <th scope="row">${userData.length + 1}</th>
      <td>${data.productName}</td>
      <td>${data.productCategory}</td>
      <td>${data.productImage}</td>
      <td>${data.productFreshness}</td>
      <td>${data.additionalDescription}</td>
      <td>${data.productPrice}</td>
    `;
    tbody.appendChild(newRow);
    userData.push(data);
  }
  // Event listener untuk form input
  document.querySelector("form").addEventListener("submit", function (e) {
    e.preventDefault();
    const formData = {
      productName: productNameInput.value,
      productCategory: productCategoryInput.value,
      productImage: productImageInput.value,
      productFreshness: productFreshnessInput.value,
      additionalDescription: productDescriptionInput.value,
      productPrice: productPriceInput.value,
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

  // Fungsi untuk menghapus data terakhir dari tabel
  function deleteUser() {
    if (userData.length > 0) {
      userData.pop();
      tbody.removeChild(tbody.lastChild);
      alert("data deleted successfully");
    }
  }
  // Event listener untuk tombol Delete
  deleteButton.addEventListener("click", deleteUser);

  // Fungsi untuk mencari data dari tabel dan menampilkan di alert
  function searchUser() {
    const productNameToSearch = searchProductNameInput.value;
    const userInput = userData.find(
      (data) => data.productName === productNameToSearch
    );
    if (userInput) {
      alert(
        `Data found!\nProduct Name: ${userInput.productName}\nProduct category: ${userInput.productCategory}\nProduct Image: ${userInput.productImage}\nProduct Freshness: ${userInput.productFreshness}\nAdditional Description: ${userInput.additionalDescription}\nProduct Price: ${userInput.productPrice}`
      );
    } else {
      alert("Data not found!");
    }
  }
  // Event listener untuk tombol Search
  searchButton.addEventListener("click", searchUser);
});
