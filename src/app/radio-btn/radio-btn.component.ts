import { Component, Input } from '@angular/core';
import { FormControl , ReactiveFormsModule } from '@angular/forms';
@Component({
  selector: 'app-radio-btn',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './radio-btn.component.html',
  styleUrl: './radio-btn.component.css'
})
export class RadioBtnComponent {
  @Input({required:true}) control!:FormControl;
  @Input({required:true}) label!:string;
  @Input({required:true}) value!:string;
}
