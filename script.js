const navLinks = document.querySelector(".nav-links");
const navItems = document.querySelectorAll(".nav-item");



document.addEventListener("DOMContentLoaded", function() {
  var hiringOption = document.getElementById("hiring");
  var commentOption = document.getElementById("comment");
  var questionOption = document.getElementById("question");
  var rateLabel = document.getElementById("rate-label");
  var rate = document.getElementById("rate");
  hiringOption.addEventListener("click", function() {
      if (hiringOption.checked) {
          rateLabel.removeAttribute("hidden");
          rate.removeAttribute("hidden");
      } else {
          rateLabel.setAttribute("hidden", "true");
          rate.setAttribute("hidden", "true");
      }
  });

  commentOption.addEventListener("click", function() {
    if (commentOption.checked) {
      rateLabel.setAttribute("hidden", "true");
      rate.setAttribute("hidden", "true");
    } 
  });

  questionOption.addEventListener("click", function() {
    if (questionOption.checked) {
      rateLabel.setAttribute("hidden", "true");
      rate.setAttribute("hidden", "true");
    } 
  });

});


// add active class on click to nav-items
navItems.forEach((item) => {
  item.addEventListener("click", function () {
    navItems.forEach((i) => i.classList.remove("nav-item-active"));
    this.classList.add("nav-item-active");
  });
});

document.getElementById('city').addEventListener('input', function(e) {
  var input = e.target,
      list = input.getAttribute('list'),
      options = document.getElementById(list).options,
      hiddenInput = document.getElementById(input.id + '-hidden');

  if (!hiddenInput) {
      hiddenInput = document.createElement('input');
      hiddenInput.type = 'hidden';
      hiddenInput.id = input.id + '-hidden';
      input.parentNode.insertBefore(hiddenInput, input.nextSibling);
  }

  hiddenInput.value = input.value;

  for (var i = 0; i < options.length; i++) {
      var option = options[i];

      if (option.innerText === input.value) {
          hiddenInput.value = option.value;
          break;
      }
  }

  // If "Other" is selected, display a message asking the user to specify the city name
  if (input.value === 'Other') {
      alert('Please specify the city name:');
  }
});




