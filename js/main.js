function revealReplies(review_id) {
  const replies = document.getElementById(review_id);

  replies.classList.toggle("toggle-replies");
}

// When the user clicks the button, open the modal
function revealProducts() {
  var modal = document.getElementById("productModal");
  var mainSection = document.getElementsByClassName("business-profile")[0];
  modal.style.display = "block";
  mainSection.style.opacity = 0.3;
}

function closeModal() {
  var modal = document.getElementById("productModal");
  var mainSection = document.getElementsByClassName("business-profile")[0];
  modal.style.display = "none";
  mainSection.style.opacity = 1;
}

// enlarge showcase image
function enlarge(id) {
  const image = document.getElementById(`${id}`).getAttribute("src");
  window.open(image.toString(), "_blank");
  // image.style.maxHeight = "80%";
}

// promo slideshow
function slideshow() {
  var i;
  var x = document.getElementsByClassName("promo");

  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }

  index++;

  if (index > x.length) {
    index = 1;
  }

  x[index - 1].style.display = "grid";
  setTimeout(slideshow, 5000); // 3 secs
}
