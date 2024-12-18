import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; 
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';


import { AppComponent } from './app.component';
import { DatepickerComponent } from './datepicker/datepicker.component';
import { MaterialDatepickerComponent } from './material-datepicker/material-datepicker.component';


@NgModule({
  declarations: [
    AppComponent,
    DatepickerComponent,
    MaterialDatepickerComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatInputModule,
    MatFormFieldModule,  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
