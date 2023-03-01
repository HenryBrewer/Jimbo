const purchaseBtn = document.querySelector("#purchase-btn");
const chapterSelect = document.querySelector("#chapter-select");

// Add click event listener to purchase button
purchaseBtn.addEventListener("click", () => {
  const selectedChapter = chapterSelect.value;
  const password = `Jimbo_${selectedChapter}`;

  // Prompt user for password
  const enteredPassword = prompt("Please enter the password for this chapter:");

  // Check if entered password matches the correct password
  if (enteredPassword === password) {
    alert(`You have purchased chapter ${selectedChapter}!`);
  } else {
    alert("Incorrect password. Please try again.");
  }
});
