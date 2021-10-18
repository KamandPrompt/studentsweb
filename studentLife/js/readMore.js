function ciReadMore() {
    var dots = document.getElementById("ciDots");
    var moreText = document.getElementById("ciMore");
    var btnText = document.getElementById("ciClick");
  
    if (dots.style.display === "none") {
      dots.style.display = "inline";
      btnText.innerHTML = "read more"; 
      moreText.style.display = "none";
    } else {
      dots.style.display = "none";
      btnText.innerHTML = "read less"; 
      moreText.style.display = "inline";
    }
  }