document.addEventListener("DOMContentLoaded", function() {
    const currentDate = new Date();
    const targetDate = new Date(currentDate.getFullYear(), 8, 23);
    const timeDiff = targetDate - currentDate;
    const daysUntilMyBirthday = Math.ceil(timeDiff / (1000 * 60 * 60 * 24));
    const countdownElement = document.getElementById("countdown");
    if (currentDate.getMonth() === 8 && currentDate.getDate() === 23) {
      countdownElement.textContent = "today";
    } else {
      countdownElement.textContent = daysUntilMyBirthday;
    }
  });
