const projectImages = document.querySelectorAll(".project img");

projectImages.forEach(function(image) {
  image.addEventListener("click", function() {
    alert("Thanks for checking out my CodeSquad assignment!");
  });
});
