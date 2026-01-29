

// const calendar = document.getElementById("calendar");

// const months = [
//   "January", "February", "March", "April",
//   "May", "June", "July", "August",
//   "September", "October", "November", "December"
// ];

// const specialDates = {
//   January: [1],
//   March: [21],
//   April: [18],
//   June: [12],
//   November: [30]
// };

// months.forEach(month => {
//   calendar.innerHTML += `
//     <div class="month">
//       <h1>${month}</h1>

//       <div class="days-week">
//         <span>Mon</span><span>Tue</span><span>Wed</span>
//         <span>Thu</span><span>Fri</span><span>Sat</span><span>Sun</span>
//       </div>

//       <div class="days">
//         ${
//           Array.from({ length: 31 }, (_, i) => {
//             const day = i + 1;
//             const isSpecial = specialDates[month]?.includes(day);

//             return `<span>${day}${isSpecial ? '🤍' : ''}</span>`;
//           }).join("")
//         }
//       </div>
//     </div>
//   `;
// });








const calendar = document.getElementById("calendar");
const specialDates = {
    "2026-01-01": "🤍",
    "2026-03-21": "🤍",
    "2026-04-18": "🤍",
    "2026-06-12": "🤍",
    "2026-11-30": "🤍"

};


const year = 2026;

const months = [
  "January", "February", "March", "April",
  "May", "June", "July", "August",
  "September", "October", "November", "December"
];

const weekDays = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

months.forEach((month, monthIndex) => {

  const firstDay = new Date(year, monthIndex, 1).getDay();
  const daysInMonth = new Date(year, monthIndex + 1, 0).getDate();

  
  const startDay = (firstDay === 0) ? 6 : firstDay - 1;

  let daysHTML = "";

  
  for (let i = 0; i < startDay; i++) {
    daysHTML += `<span class="empty"></span>`;
  }


  for (let day = 1; day <= daysInMonth; day++) {
  const monthNumber = String(monthIndex + 1).padStart(2, "0");
  const dayNumber = String(day).padStart(2, "0");
  const fullDate = `${year}-${monthNumber}-${dayNumber}`;

  if (specialDates[fullDate]) {
    daysHTML += `<span class="special-day">${day}${specialDates[fullDate]}</span>`;
  } else {
    daysHTML += `<span>${day}</span>`;
  }
}

  calendar.innerHTML += `
    <div class="month">
      <h1>${month}</h1>

      <div class="days-week">
        ${weekDays.map(d => `<span>${d}</span>`).join("")}
      </div>

      <div class="days">
        ${daysHTML}
      </div>
    </div>
  `;
});




