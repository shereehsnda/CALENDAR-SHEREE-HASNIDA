function createCalendar(year) {
  let calendarDiv = document.getElementById('calendar');
  let months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  let birthdayDates = {
    '2024-12-06': { name: 'Sheree Hasnida Birthday', image: 'gambar sheree.jpg'},
    '2024-07-26': { name: 'Daddy Birthday Birthday', image: 'gambar mom dad.jpg',},
    '2024-06-16': { name: 'Mommy Birthday', image: 'gambar mom dad.jpg'},
    '2024-06-20': { name: 'Sherafifihasyanie Birthday', image: 'gambar sherra.jpg'},
    '2024-06-24': { name: 'Sabrefairolshah Birthday', image: 'gambar sabre.jpg'},
    '2024-08-08': { name: 'Susante Birthday', image: 'gambar susante.jpg'},
    '2024-10-09': { name: 'Feriehan Nizamrin Birthday', image: 'gambar feriehan.jpg'}
  };

  let malaysianHolidays = {
    '2024-01-01': { name: 'New Year', image: '2024.jpg', link: 'https://publicholidays.com.my/new-years-day/' },
    '2024-05-01': { name: 'Labour Day', image: 'labour day.jpg', link: 'https://publicholidays.com.my/labour-day/' },
    '2024-08-31': { name: 'Merdeka Day', image: 'merdeka.jpg', link: 'https://publicholidays.com.my/national-day/' },
    '2024-01-25': { name: 'Thaipusam', image: 'thaipusam.jpg', link: 'https://publicholidays.com.my/thaipusam/' },
    '2024-02-08': { name: 'Isra and Mikraj', image: 'isra mikraj1.jpg', link: 'https://publicholidays.com.my/israk-and-mikraj/' },
    '2024-02-10': { name: 'Chinese New Year', image: 'cina1.jpg', link: 'https://publicholidays.com.my/chinese-new-year/' },
    '2024-03-12': { name: 'Awal Ramadan', image: 'awal ramadan.jpg', link: 'https://publicholidays.com.my/awal-ramadan/' },
    '2024-03-28': { name: 'Nuzul Al-Quran', image: 'nuzul.jpg', link: 'https://publicholidays.com.my/nuzul-al-quran/' },
    '2024-04-10': { name: 'Hari Raya Aidilfitri', image: 'raya.jpg', link: 'https://publicholidays.com.my/hari-raya-aidilfitri/' },
    '2024-05-22': { name: 'Wesak Day', image: 'wesak.jpg', link: 'https://publicholidays.com.my/wesak-day/' },
    '2024-06-01': { name: 'Hari Gawai', image: 'gawai.jpg', link: 'https://publicholidays.com.my/hari-gawai/' },
    '2024-06-17': { name: 'Hari Raya Haji', image: 'raya haji.jpg', link: 'https://publicholidays.com.my/hari-raya-haji/' },
    '2024-07-07': { name: 'Awal Muharram', image: 'muharram.jpg', link: 'https://publicholidays.com.my/awal-muharram/' },
    '2024-07-22': { name: 'Sarawak Day', image: 'sarawak.jpg', link: 'https://publicholidays.com.my/sarawak-day/' },
    '2024-09-16': { name: 'Malaysia Day', image: 'malaysia day.jpg', link: 'https://publicholidays.com.my/malaysia-day/' },
    '2024-10-31': { name: 'Deepavali/Diwali', image: 'deepavali.jpg', link: 'https://publicholidays.com.my/deepavali/' },
    '2024-12-25': { name: 'Christmas', image: 'christmas.jpg', link: 'https://publicholidays.com.my/christmas/' },
    
  };

  let html = '';
  for (let i = 0; i < 12; i++) {
    let month = i + 1;
    let daysInMonth = new Date(year, month, 0).getDate();
    let monthName = months[i];

    html += `<h2>${monthName} ${year}</h2>`;
    html += '<table>';
    html += '<tr><th>Sun</th><th>Mon</th><th>Tue</th><th>Wed</th><th>Thu</th><th>Fri</th><th>Sat</th></tr>';
    html += '<tr>';

    // Loop through days
    let day = 1;
    let firstDay = new Date(year, i, 1).getDay();

    
    for (let j = 0; j < firstDay; j++) {
      html += '<td></td>';
    }

    for (let j = 0; j < daysInMonth; j++) {
      let currentDate = new Date(year, i, day);
      let currentDay = currentDate.getDate();
      let currentMonth = currentDate.getMonth() + 1;
      let currentYear = currentDate.getFullYear();
      let formattedDate = `${currentYear}-${currentMonth.toString().padStart(2, '0')}-${currentDay.toString().padStart(2, '0')}`;
      let holidayData = malaysianHolidays[formattedDate];
      let birthdayData = birthdayDates[formattedDate];

      if (holidayData) {
        html += `<td class="holiday" title="${holidayData.name}"><a href="${holidayData.link}"><img src="${holidayData.image}" alt="${holidayData.name}"></a>${currentDay}</td>`;
      } else if (birthdayData) {
        html += `<td class="birthday" title="${birthdayData.name}"><a href="${birthdayData.link}"><img src="${birthdayData.image}" alt="${birthdayData.name}"></a>${currentDay}</td>`;
      } else {
        html += `<td>${currentDay}</td>`;
      }

      if (currentDate.getDay() === 6) { // 
        html += '</tr><tr>';
      }
      day++;
    }

  
    for (let k = new Date(year, i, daysInMonth).getDay(); k < 6; k++) {
      html += '<td></td>';
    }
    html += '</tr></table>';
  }

  calendarDiv.innerHTML = html;
}

createCalendar(2024);
