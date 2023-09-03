const productNameInput = document.getElementById('validationDefault01');
const productPriceInput = document.getElementById('validationDefault08');
const productCategoryInput = document.getElementById('validationDefault02');
const productImageInput = document.getElementById('validationDefault03');
const productDescriptionInput = document.getElementById('validationDefault07');
const submitButton = document.querySelector('button[type="submit"]');
const radioButtons = document.querySelectorAll('input[name="freshness"]');

document.querySelector('form').addEventListener('submit', function (e) {
  e.preventDefault(); // Hindari pengiriman form default

  // Validasi Product Name
  const productName = productNameInput.value.trim();
  if (productName.length === 0) {
    alert('field must be filled in');
    return;
  }
  if (productName.length > 10) {
    alert('Last Name must not exceed 10 characters.');
  }
  if (productName.length > 25) {
    alert('Product Name must not exceed 25 characters.');
    return;
  }
  // Validasi karakter yang tidak diizinkan pada Product Name
  if (/[@/#{}]/.test(productName)) {
    alert('Product Name must not contain symbols.');
    return;
  }
  
  const productCategory = productCategoryInput.value.trim();
  if(productCategory.length === 0){
    alert ('Product Category field must be filled in');
    return;
  }
  
  const productImage = productImageInput.value.trim();
  if(productImage.length === 0){
    alert ('Product Image field must be filled in');
    return;
  }
  
  // Validasi radio button yang dipilih
  let selectedRadioButtonLabel = '';
  for (const radioButton of radioButtons) {
    if (radioButton.checked) {
      selectedRadioButtonLabel = document.querySelector(`label[for="${radioButton.id}"]`).textContent;
      break;
    }
  }

  if (!selectedRadioButtonLabel) {
    alert('Please select a Product Freshness option.');
    return;
  }
  
  const productDescription = productDescriptionInput.value.trim();
  if(productDescription.length === 0){
    alert ('Additional Description field must be filled in');
    return;
  }

  // Validasi Product Price
  const productPrice = productPriceInput.value.trim();
  if (productPrice.length === 0) {
    alert('Product Price field must be filled in');
    return;
  }
  
  // Semua validasi terpenuhi, tampilkan alert dengan data
  alert(`Product Name: ${productName}\nProduct Category: ${productCategory}\nProduct Image: ${productImage}\nProduct Freshness: ${selectedRadioButtonLabel}\nAdditional Description: ${productDescription}\nProduct Price: ${productPrice}\n`);

  document.querySelector('form').reset();
});

productNameInput.addEventListener('input', validateInput);
productPriceInput.addEventListener('input', validateInput);
productCategoryInput.addEventListener('input', validateInput);
productImageInput.addEventListener('input', validateInput);
productDescriptionInput.addEventListener('input', validateInput);

// Fungsi untuk memeriksa input dan menonaktifkan/mengaktifkan tombol submit
function validateInput() {
  const productName = productNameInput.value.trim();
  const productPrice = productPriceInput.value.trim();
  const productCategory = productCategoryInput.value.trim();
  const productImage = productImageInput.value.trim();
  const productDescription = productDescriptionInput.value.trim();

  if (productName.length > 25 || productName.length === 0 || /[@#{}]/.test(productName) || productPrice.length === 0 || productCategory.length === 0 || productImage.length === 0 || productDescription.length === 0) {
    // submitButton.disabled = true;
    productNameInput.classList.add('is-invalid');
    productNameInput.classList.remove('is-valid');
    productCategoryInput.classList.add('is-invalid');
    productCategoryInput.classList.remove('is-valid');
    productImageInput.classList.add('is-invalid');
    productImageInput.classList.remove('is-valid');
    productDescriptionInput.classList.add('is-invalid');
    productDescriptionInput.classList.remove('is-valid');
    productPriceInput.classList.add('is-invalid');
    productPriceInput.classList.remove('is-valid');
    
    $('#validationAlert').show();
  } else {
    // submitButton.disabled = false;
    productNameInput.classList.remove('is-invalid');
    productNameInput.classList.add('is-valid');
    productCategoryInput.classList.remove('is-invalid');
    productCategoryInput.classList.add('is-valid');
    productImageInput.classList.remove('is-invalid');
    productImageInput.classList.add('is-valid');
    productDescriptionInput.classList.remove('is-invalid');
    productDescriptionInput.classList.add('is-valid');
    productPriceInput.classList.remove('is-invalid');
    productPriceInput.classList.add('is-valid');

    $('#validationAlert').hide();
  }
}

validateInput();