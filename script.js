function submitForm() {
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const message = document.getElementById("message").value;

  if (name === "" || email === "" || message === "") {
    alert("Please fill all fields!");
    return false;
  }

  // Show success message
  document.getElementById("successMsg").innerText = "Message sent successfully!";

  // Clear form
  document.getElementById("name").value = "";
  document.getElementById("email").value = "";
  document.getElementById("message").value = "";

  return false;
}
