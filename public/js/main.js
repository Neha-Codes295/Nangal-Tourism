// main.js (optional enhancements)
document.addEventListener("DOMContentLoaded", () => {
  console.log("Nangal Tourism site loaded!");
});

document.addEventListener('DOMContentLoaded', function () {
  const toggleBtn = document.getElementById('toggle-theme');
toggleBtn.addEventListener('click', () => {
  document.body.classList.toggle('dark-theme');
});


  // const toggleBtn = document.getElementById('toggle-theme');
  // const body = document.body;

  // toggleBtn.addEventListener('click', function () {
  //   body.classList.toggle('dark-mode');
  //   toggleBtn.textContent = body.classList.contains('dark-mode') ? '☀️' : '🌙';
  // });
});
