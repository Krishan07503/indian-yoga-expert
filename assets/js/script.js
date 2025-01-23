// min and max start

$(document).ready(function () {
  var inputLeft = document.getElementById("input-left");
  var inputRight = document.getElementById("input-right");

  var thumbLeft = document.querySelector(".slider > .thumb.left");
  var thumbRight = document.querySelector(".slider > .thumb.right");
  var range = document.querySelector(".slider > .range");

  function setLeftValue() {
    var _this = inputLeft,
      min = parseInt(_this.min),
      max = parseInt(_this.max);

    _this.value = Math.min(
      parseInt(_this.value),
      parseInt(inputRight.value) - 1
    );

    var percent = ((_this.value - min) / (max - min)) * 100;

    thumbLeft.style.left = percent + "%";
    range.style.left = percent + "%";
  }
  setLeftValue();

  function setRightValue() {
    var _this = inputRight,
      min = parseInt(_this.min),
      max = parseInt(_this.max);

    _this.value = Math.max(
      parseInt(_this.value),
      parseInt(inputLeft.value) + 1
    );

    var percent = ((_this.value - min) / (max - min)) * 100;

    thumbRight.style.right = 100 - percent + "%";
    range.style.right = 100 - percent + "%";
  }
  setRightValue();

  inputLeft.addEventListener("input", setLeftValue);
  inputRight.addEventListener("input", setRightValue);

  inputLeft.addEventListener("mouseover", function () {
    thumbLeft.classList.add("hover");
  });
  inputLeft.addEventListener("mouseout", function () {
    thumbLeft.classList.remove("hover");
  });
  inputLeft.addEventListener("mousedown", function () {
    thumbLeft.classList.add("active");
  });
  inputLeft.addEventListener("mouseup", function () {
    thumbLeft.classList.remove("active");
  });

  inputRight.addEventListener("mouseover", function () {
    thumbRight.classList.add("hover");
  });
  inputRight.addEventListener("mouseout", function () {
    thumbRight.classList.remove("hover");
  });
  inputRight.addEventListener("mousedown", function () {
    thumbRight.classList.add("active");
  });
  inputRight.addEventListener("mouseup", function () {
    thumbRight.classList.remove("active");
  });

  //min max end
});

$(document).ready(function () {
  // Select the read-more button
  const readMoreBtn = document.querySelector(".read-more-btn");

  // Add an event listener to toggle text on click
  readMoreBtn.addEventListener("click", function () {
    const isExpanded = this.getAttribute("aria-expanded") === "true";
    if (isExpanded) {
      this.innerHTML =
        'Read Less <span><i class="fa-solid fa-angle-up"></i></span>';
    } else {
      this.innerHTML =
        'Read More <span><i class="fa-solid fa-angle-down"></i></span>';
    }
  });
});


$(document).ready(function () {
  // $(".accordion-button").hasClass("collapsed") != true ? showSearchIcon(".accordion-button") : hideSearchIcon(".accordion-button"); 
  function showSearchIcon (e) {
    // console.log(e)
    $(e).find(".search-img-box-btn").css("display","block").animate({opacity:"1"},500)
  }
  function hideSearchIcon (e) {
    // console.log(e)
    $(e).find(".search-img-box-btn").animate({ opacity: "0" }, 500, function () {
      $(this).css("display","none")
    })
  }
  $(".accordion-button").on("click", function () {
    $(this).hasClass("collapsed") != true ? showSearchIcon(this) : hideSearchIcon(this); 
  })
});
// console.log("object2 hide")