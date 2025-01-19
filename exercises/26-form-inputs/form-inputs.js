(function () {
  /**
   * You have a few problems to solve below with Vanilla JavaScript.
   * You are allowed to make changes to the HTML and CSS.
   */
  /**
   * Problem 1: Display what the user is typing or selecting from a dropdown.
   *
   * When the user types in an email address,
   * display what they are typing inside of the empty <span> tags.
   * When the user selects an option from the dropdown,
   * display what they selected inside of the empty <span> tags.
   * (See the comments in the HTML for what <span> tags to sue.)
   */
  (function () {
    const emailInput = document.getElementById("email");
    const titleSelect = document.getElementById("title");
    const emailSpan = document.querySelector(".card-body > div.mb-3:nth-child(1) > span");
    const titleSpan = document.querySelector(".card-body > div.mb-3:nth-child(2) > span");
  
    emailInput.addEventListener("input", function () {
      emailSpan.textContent = emailInput.value;
    });
  
    titleSelect.addEventListener("change", function () {
      titleSpan.textContent = titleSelect.options[titleSelect.selectedIndex].textContent;
    });
  })();
  
  /**
   * Problem 2: Handle a checkbox
   *
   * A <div> that says "✓ Include promotional offers" is hidden o the screen.
   * When the user checks the "Send promotional offers to my email address" checkbox,
   * show the hidden <div> tag.
   *
   * As a bonus, see if you can hide the <div> tag if they uncheck the checkbox.
   */
  (function () {
    const promotionsCheckbox = document.getElementById("shouldSendPromotions");
    const promotionsDiv = document.querySelector(".card-body .hidden");
  
    promotionsCheckbox.addEventListener("change", function () {
      if (promotionsCheckbox.checked) {
        promotionsDiv.classList.remove("hidden");
      } else {
        promotionsDiv.classList.add("hidden");
      }
    });
  })();
  
  /**
   * Problem 3: Input validation
   *
   * There is a hidden error message "Please enter email address."
   * If the user has not typed in anything in the email address textbox,
   * show this error message.
   * If they have typed something, hide this error message.
   *
   * You can use the "input" or "change" events, but the general UX recommendation
   * is to use "blur" events for these types of error messages (form validation errors).
   */
  (function () {
    const emailInput = document.getElementById("email");
    const emailError = document.querySelector(".invalid-feedback");
  
    emailInput.addEventListener("blur", function () {
      if (!emailInput.value.trim()) {
        emailError.style.display = "block";
      } else {
        emailError.style.display = "none";
      }
    });
  })();
  
})();
