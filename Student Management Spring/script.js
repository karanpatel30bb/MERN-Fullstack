
document.addEventListener("DOMContentLoaded", () => {

  const welcomeSection = document.querySelector(".welcome");
  const profileSection = document.getElementById("studentProfile");


  const menuLinks = document.querySelectorAll(".menu a");

 
  function showSection(sectionToShow) {
 
    welcomeSection.classList.add("hidden");
    profileSection.classList.add("hidden");


    sectionToShow.classList.remove("hidden");

    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  
  menuLinks.forEach(link => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      const text = link.textContent.trim();

      if (text === "Home") {
        showSection(welcomeSection);
      } 
      else if (text === "Profile") {
        showSection(profileSection);
      } 
      else if (text === "Logout") {
        alert("You have been logged out successfully!");
        showSection(welcomeSection);
      } 
      else {
        alert(`${text} page is under construction.`);
      }
    });
  });

  
  window.showProfile = function() {
    showSection(profileSection);
  };
});
