(function () {
  
  const selectButtons = document.querySelectorAll(".plan-footer button")
  const notificationMessage = document.querySelector("#notificationMessage")
  const notification = document.querySelector("#notification");
  const deleteButton = document.querySelector(".delete");
  console.log(deleteButton)
  selectButtons.forEach((selectButton) => {
    selectButton.addEventListener("click", () => {

      newButton = selectButton.id
      notificationMessage.textContent = `Thank you for purchasing the ${newButton} plan!`
      notification.style.display = "block"
    
    })
  }) 
    
  deleteButton.addEventListener("click", () => {
    notification.style.display = "none"
  }
) 
    /**
   * When the user clicks on one of the "Select" buttons to select a plan,
   * show a thank message with the plan's name inside of the aqua green notification at the top of the screen.
   *
   * For example, if the user chooses "Premium", display:
   * "Thank you for purchasing the Premium plan!"
   *
   * You must use "document.querySelectorAll" to solve this problem.
   *
   * You can edit the HTML on the page to solve this problem.
   *
   * As a bonus, you can hide the notification before the user selects a plan.
   * You can also make the "x" icon dismiss the notification.
   */
  // Write your answer here
})();
