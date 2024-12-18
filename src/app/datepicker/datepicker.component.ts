import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-datepicker',
  templateUrl: './datepicker.component.html',
  styleUrls: ['./datepicker.component.css']
})
export class DatepickerComponent implements OnInit {
  showCalendar = false;
  selectedDate: string | null = null;

  currentYear: number = new Date().getFullYear();
  currentMonth: number = new Date().getMonth();
  days: string[] = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'];
  months: string[] = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];
  dates: (number | null)[] = [];

  ngOnInit() {
    this.generateCalendar();
  }

  toggleCalendar() {
    this.showCalendar = !this.showCalendar;
  }

  generateCalendar() {
    const firstDay = new Date(this.currentYear, this.currentMonth, 1).getDay();
    const daysInMonth = new Date(this.currentYear, this.currentMonth + 1, 0).getDate();

    this.dates = Array(firstDay).fill(null).concat(
      Array.from({ length: daysInMonth }, (_, i) => i + 1)
    );
  }

  previousMonth() {
    if (this.currentMonth === 0) {
      this.currentMonth = 11;
      this.currentYear--;
    } else {
      this.currentMonth--;
    }
    this.generateCalendar();
  }

  nextMonth() {
    if (this.currentMonth === 11) {
      this.currentMonth = 0;
      this.currentYear++;
    } else {
      this.currentMonth++;
    }
    this.generateCalendar();
  }

  selectDate(date: number | null) {
    if (date) {
      this.selectedDate = `${this.currentYear}-${this.currentMonth + 1}-${date}`;
      this.showCalendar = false; // بستن تقویم پس از انتخاب تاریخ
    }
  }

  clearDate() {
    this.selectedDate = null;
  }
}
