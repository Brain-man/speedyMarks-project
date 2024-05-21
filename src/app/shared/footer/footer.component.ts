import { Component } from "@angular/core";
import { smallLetterValidators } from "../../utils/smallLettersValidator";
import { ReactiveFormsModule } from "@angular/forms";
import { NgIf } from "@angular/common";



@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [ReactiveFormsModule, NgIf],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})


export class FooterComponent {
// onSubmit() {
// throw new Error('Method not implemented.');
// }
// title = 'speedyMarks-project';
// form: FormGroup<any>;

 }
