import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import {
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { RegisterComponent } from './register/register.component';
import { Radiobutton } from './radiobutton';
import { RadioBtnComponent } from './radio-btn/radio-btn.component';
import { validateDate } from './validateDate';
import { validateName } from './validateName';
validateDate;
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RegisterComponent,
    RadioBtnComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements OnInit {
  firstName: string = '';
  lastName: string = '';
  userAge!: number;
  thisYear!: number;
  constructor(private Fb: FormBuilder) {}
  ngOnInit(): void {
  }
  registerForm = this.Fb.nonNullable.group({
    firstName: this.Fb.nonNullable.control('', [
      Validators.required,
      Validators.maxLength(20),
      Validators.minLength(3),validateName
    ]),
    lastName: this.Fb.nonNullable.control('', [
      Validators.required,
      validateName,
      Validators.maxLength(20),
      Validators.minLength(3),
      
    ]),
    gender: this.Fb.nonNullable.control(Radiobutton.male,[Validators.required]),
    date: this.Fb.nonNullable.control('',[Validators.required, validateDate]),
    hoppies:this.Fb.array([this.getHoppies()]),
    condition:this.Fb.control(false, [Validators.required]),
  });
  date(event: Event) {
    const userDate = event.target as HTMLInputElement;
    const dateValue = userDate.value;
    console.log(Number(dateValue.slice(0, 4)));
    const age: number = Number(dateValue.slice(0, 4));
    const d1 = new Date();
    let getYear: number = d1.getFullYear();
    this.thisYear = getYear;
    console.log(getYear);
    let result: number = getYear - age;
    this.userAge = result;
    console.log(result);
  }
  getHoppies() {
    return new FormGroup({
      new_hoppies:new FormControl('',[Validators.required,Validators.maxLength(10),Validators.minLength(3)]),
    });
  }
  get hoppiesArray() {
    return this.registerForm.controls.hoppies;
  }
  addStudent() {
    return this.hoppiesArray.push(this.getHoppies());
  }
  removeStudent(i: number) {
    return this.hoppiesArray.removeAt(i);
  }
  sumbitData() {
    if (this.registerForm.invalid) {
      this.registerForm.markAllAsTouched()
    }
    else{
      console.log(this.registerForm.value)
    }
  }
  resetData() {
    if(this.userAge > 0){
      this.userAge = 0
      return
    }
    this.registerForm.reset()
  }
}
