document.addEventListener("DOMContentLoaded", function() {
  // Fetch header
  fetch("navbar.html")
    .then(response => response.text())
    .then(data => {
      document.getElementById("nav-bar").innerHTML = data;

      // Setelah header masuk, aktifkan nav
      const currentPage = window.location.pathname.split("/").pop() || "index.html";
      const links = document.querySelectorAll('.nav-link');
      links.forEach(link => {
        if (link.getAttribute('data-page') === currentPage) {
          link.classList.add('active');
        }
      });
    });

  // Fetch footer
  fetch("footer.html")
    .then(response => response.text())
    .then(data => {
      document.getElementById("footer").innerHTML = data;
    });
});