const destinations = [
      "https://www.google.com/search?q=Paris",
      "https://www.google.com/search?q=Tokyo",
      "https://www.google.com/search?q=New+York",
      "https://www.google.com/search?q=Rome",
      "https://www.google.com/search?q=Sydney",
      "https://www.google.com/search?q=Dubai"
    ];

const randomplacegenerator (){
    const randomIndex = Math.floor(Math.random()*destinations.length)
    const randomDestination = destinations[randomIndex];
}