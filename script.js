var acc_headers = document.querySelectorAll(".accordion-header");
var acc_contents = document.querySelectorAll(".accordion-body");

acc_headers.forEach(header => {
  header.addEventListener("click", e => {

    acc_contents.forEach(content => {
      if (e.target.nextElementSibling !== content && content.classList.contains("active")) {
        content.classList.remove("active");
        acc_headers.forEach(header => header.classList.remove("active"));
      }
    });

    var body = header.nextElementSibling;
    body.classList.toggle("active");

    header.classList.toggle("active");

  });
});
