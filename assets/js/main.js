const handleSubmit = (e) => {
  e.preventDefault();
  e.stopPropagation();
  let myForm = document.getElementById('form-contact');
  let formData = new FormData(myForm);
  for (const value of formData.entries()) {
    const data = value[0] + ': ' + value[1];
    console.log(data);
  }
};
