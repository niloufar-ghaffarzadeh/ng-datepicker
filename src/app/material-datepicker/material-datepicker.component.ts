import { Component } from '@angular/core';

@Component({
  selector: 'app-material-datepicker',
  templateUrl: './material-datepicker.component.html',
  styleUrls: ['./material-datepicker.component.css']
})
export class MaterialDatepickerComponent {
  selectedDate: Date | null = null;
}
