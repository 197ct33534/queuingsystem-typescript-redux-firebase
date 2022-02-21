import React, { useRef, useEffect, useCallback, memo } from 'react';

const Datepicker = () => {
  const currentDateRef = useRef<HTMLDivElement>(null);
  const calendarRef = useRef<HTMLDivElement>(null);
  const prevMonth = useRef<HTMLDivElement>(null);
  const nextMonth = useRef<HTMLDivElement>(null);
  const isLeapYear = (year: number) => {
    return (
      (year % 4 === 0 && year % 100 !== 0 && year % 400 !== 0) ||
      (year % 100 === 0 && year % 400 === 0)
    );
  };
  const handleClickDatePick = (day: number) => {
    console.log(day);
  };
  const getFebDays = (year: number) => {
    return isLeapYear(year) ? 29 : 28;
  };

  let month_names: string[] = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];
  let currentDate = new Date();
  // let currentMonth = { value: currentDate.getMonth() };
  // let currentYear = { value: currentDate.getFullYear() };
  let month = currentDate.getMonth();
  let year = currentDate.getFullYear();
  let generateCalendar = useCallback(
    (month, year) => {
      let days_of_month = [
        31,
        getFebDays(year),
        31,
        30,
        31,
        30,
        31,
        31,
        30,
        31,
        30,
        31,
      ];
      let currDate = new Date();
      // không truyền year and month
      if (month === undefined) month = currDate.getMonth();
      if (year === undefined) year = currDate.getFullYear();

      let curr_month = `${month_names[month].slice(0, 3)}`;
      let day_currtent = currDate.getDate();
      if (null !== currentDateRef.current)
        currentDateRef.current.innerHTML = `${day_currtent} ${curr_month} ${year}`;

      // list day of month
      if (calendarRef.current !== null) {
        calendarRef.current.innerHTML = '';
        let first_day = new Date(year, month, 1);
        let first_day_ofMonth = first_day.getDay();
        let day_ofMonth_prev =
          month === 0 ? days_of_month[11] : days_of_month[month - 1];
        for (
          let i = 1;
          i <= days_of_month[month] + first_day_ofMonth - 1;
          i++
        ) {
          let day = document.createElement('div');
          day.classList.add('calendar-number');

          if (i >= first_day.getDay()) {
            day.addEventListener('click', () =>
              handleClickDatePick(i - first_day.getDay() + 1)
            );

            day.innerHTML = `<span >${i - first_day.getDay() + 1} </span>`;

            if (
              i - first_day.getDay() + 1 === currDate.getDate() &&
              year === currDate.getFullYear() &&
              month === currDate.getMonth()
            ) {
              day.classList.add('date-current');
            }
          } else if (i < first_day_ofMonth) {
            day.classList.add('dis');
            day.addEventListener('click', () =>
              handleClickDatePick(
                day_ofMonth_prev - Number(first_day_ofMonth) + i + 1
              )
            );
            day.innerHTML = `<span >${
              day_ofMonth_prev - Number(first_day_ofMonth) + i + 1
            } </span>`;
          }
          calendarRef.current.appendChild(day);
        }

        for (
          let i = 1;
          i <= 42 - (days_of_month[month] + first_day_ofMonth - 1);
          i++
        ) {
          let day = document.createElement('div');
          day.addEventListener('click', () => handleClickDatePick(i));
          day.classList.add('calendar-number');
          day.classList.add('dis');
          day.innerHTML = `<span >${i} </span>`;
          calendarRef.current.appendChild(day);
        }
      }
    },
    [month_names, getFebDays]
  );

  useEffect(() => {
    generateCalendar(month, year);

    console.log('render');
  }, [generateCalendar, month, year]);

  useEffect(() => {
    if (nextMonth.current !== null) {
      nextMonth.current.onclick = () => {
        if (month === 11) {
          month = 0;
          year++;
        } else {
          month++;
        }
        generateCalendar(month, year);
      };
    }
    if (prevMonth.current !== null) {
      prevMonth.current.onclick = () => {
        if (!month) {
          year--;
          month = 11;
        } else {
          month--;
        }
        generateCalendar(month, year);
      };
    }
  }, [year, generateCalendar, month]);

  return (
    <div className="calendar">
      <div className="calendar-header">
        <span ref={prevMonth} className="calendar-change">
          <i className="bx bx-chevron-left"></i>
        </span>
        <span className="calendar-current" ref={currentDateRef}>
          19 Nov 2021
        </span>
        <span ref={nextMonth} className="calendar-change">
          <i className="bx bx-chevron-right"></i>
        </span>
      </div>
      <div className="calendar-line"></div>
      <div className="calendar-body">
        <div className="calendar-body-week grid-col-7">
          <div>Mon</div>
          <div>Tue</div>
          <div>Wed</div>
          <div>Thu</div>
          <div>Fri</div>
          <div>Sat</div>
          <div>Sun</div>
        </div>
        <div className="calendar-days grid-col-7" ref={calendarRef}></div>
      </div>
    </div>
  );
};

export default memo(Datepicker);
