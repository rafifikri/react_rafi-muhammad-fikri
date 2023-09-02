document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector("form");
  const productNameInput = document.getElementById("validationDefault01");
  const productPriceInput = document.getElementById("validationDefault08");
  const submitButton = document.querySelector("button");
  // const formInputs2 = form.querySelectorAll("input, select, textarea");
  // form.addEventListener("input", updateSubmitButtonState);

  
  var btn = document.querySelector("button");
  var inputProductName = document.getElementById("validationDefault01");
  var inputProductPrice = document.getElementById("validationDefault08");
  var inputProductCategory = document.getElementById("validationDefault02");
  var inputProductImage = document.getElementById("validationDefault03");
  var inputProductFreshness = document.getElementById("flexRadioDefault04");
  var inputProductDescription = document.getElementById("validationDefault07");


  function updateSubmitButtonState() {
    const formInputs = [
      inputProductName,
      inputProductPrice,
      inputProductCategory,
      inputProductImage,
      inputProductFreshness,
      inputProductDescription,
    ];
  
    const isFormValid = formInputs.every((input) => input.checkValidity());
  
    btn.disabled = !isFormValid;
  }
  
  form.addEventListener("input", updateSubmitButtonState);

//   const tombolSubmit = document.querySelector("button");

//   submitButton.onclick = function (event) {
//     event.preventDefault();

//     const formInputs = [
//       inputProductName,
//       inputProductPrice,
//       inputProductCategory,
//       inputProductImage,
//       inputProductFreshness,
//       inputProductDescription,
//     ];
  

//     formInputs2.forEach((input) => {
//       if (input.value == "") {
//         input.classList.add("is-invalid");
//       } else {
//         input.classList.remove("is-invalid");
//       }
//     });

  
//   // const isFormValid = formInputs.every((input) => input.checkValidity());
//   }

//   // btn.disabled = !isFormValid;
//   function updateSubmitButtonState() {
//     const isFormValid = form.checkValidity();

//   if (!isFormValid){
//     tombolSubmit.classList.add("disabled");
//   } else {
//     tombolSubmit.classList.remove("disabled");
//   }
// }

btn.onclick = function () { //myFunction
    const productName = productNameInput.value.trim();
    const productPrice = productPriceInput.value.trim();
    

    if (productName.length > 25) {
      alert("Last Name must not exceed 25 characters.");
    }

    if (productName.length > 10 && productName.length < 25) {
      // inputProductName.classList.add("invalid");
      alert("Last Name must not exceed 25 characters.");
    }

    else if(inputProductName.value == ""){
      // inputProductName.classList.add("is-invalid");
      alert("field must be filled in");
      return;
    }

    else if(inputProductName.value == ""){
        alert("Please enter a valid Product name.");
        // inputProductName.classList.add("invalid");
        
    } 
    else if (productName.match(/[!/@#{}]/)) {
      alert("Name must not contain symbols.");
    }

    else if(inputProductCategory.value == ""){
      alert("The Product Category field must be filled in");
    }

    else if(inputProductImage.value == ""){
      alert("The Product Image field must be filled in");
    }

    else if(!inputProductFreshness.checked){
      alert("The Product Freshness field must be filled in");
    }

    else if(inputProductDescription.value == ""){
      alert("The Additional Description field must be filled in");
    }

    else if(inputProductPrice.value == ""){
      alert("The Product Price field must be filled in");
      // inputProductPrice.classList.add("invalid");
      // return;
    }
    
    else{
      // output.innerHTML = input.value;
      // input.value = "";
      inputProductName.classList.remove("invalid");
    } 

    if (isFormValid) {
      const formData = `
        Product Name: ${inputProductName.value}
        Product Price: ${inputProductPrice.value}
        Product Category: ${inputProductCategory.value}
        Product Image: ${inputProductImage.value}
        Product Freshness: ${inputProductFreshness.value}
        Product Description: ${inputProductDescription.value}
      `;
  
      alert(formData); // Display form data in an alert
    }   
  } 
});

//Validasi input kosong
// const formElements = form.querySelectorAll("input, textarea, select");
// for (const element of formElements) {
//   if (element.value.trim() === "") {
//     const fieldName = element.getAttribute("placeholder") || "This";
//     alert(`Field ${fieldName} must be filled in.`);
//     return;
//   }
// }

// Validasi karakter kosong di Nama Produk dan Harga Produk
// if (productName.length === 0 ||  .length === 0) {
//   alert("Harap masukkan Nama Produk dan Harga Produk yang valid.");
//   return;
// }



// Jika semua validasi berhasil, tampilkan modal
// const modal = new bootstrap.Modal(document.getElementById("myModal"));
// modal.show();


