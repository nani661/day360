const content = document.querySelector(".day");
setInterval(() => {
  const startDate = new Date(2023, 1, 2); // Tháng trong JavaScript bắt đầu từ 0 (0 là tháng 1)
  const currentDate = new Date();

  const diffTime = currentDate.getTime() - startDate.getTime();
  const diffDays = diffTime / (1000 * 3600 * 24);
  content.innerHTML = `Day: ${Math.floor(diffDays)}`;
}, 1000);
