function searchDestination() {
  const input = document.querySelector(".search-box input").value;
  if (input.trim() === "") {
    alert("Please enter a destination!");
  } else {
    alert("Searching for: " + input);
  }
}