function showDestinations() {
  document.getElementById("destinations").classList.remove("hidden");
}

function setGreeting() {
  const hour = new Date().getHours();
  let greeting = "Welcome, traveler!";
  if (hour < 12) greeting = "Good morning, explorer!";
  else if (hour < 18) greeting = "Good afternoon, adventurer!";
  else greeting = "Good evening, wanderer!";
  document.getElementById("greeting").textContent = greeting;
}

setGreeting();
