const today = new Date();
  const targetDate = new Date(today.getFullYear(), 8, 23);
  const timeDifference = targetDate - today;
  const daysRemaining = Math.ceil(timeDifference / (1000 * 60 * 60 * 24));
  const countdownElement = document.getElementById('countdown');
  if (daysRemaining === 0) {
    countdownElement.textContent = "YAY TODAY IS MY BIRTHDAY THANKS FOR VISITING MY BIO TODAY!";
  } else if (daysRemaining === 1) {
    countdownElement.textContent = "ONE MORE DAY - COME BACK TOMMORROW";
  } else {
    countdownElement.textContent = daysRemaining;
  }
