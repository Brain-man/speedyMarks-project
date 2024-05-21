import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";

export function smallLetterValidators () : ValidatorFn{
  return (control:AbstractControl):ValidationErrors | null=>{
    const isSmallLettersOnly : boolean =/^[a-z]*$/.test(control.value);
    return isSmallLettersOnly ? null:{notSmallLetters:{value:control.value}}
  }
}
