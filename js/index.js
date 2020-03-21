var modal = document.getElementById("myModal");



$("#myBtn").click(function() {
  modal.style.display = "block";
});

$(".close").click(function() {
  modal.style.display = "none";
});

$(document).click(function(e) {
  if (e.target == modal) {
    modal.style.display = "none";
  }
});
