import { AbstractControl } from "@angular/forms";

export function validateDate(control:AbstractControl){
    const value  = control.value
    const year = control.value.slice(0,4)
    const d1 = new Date();
    let getYear: number = d1.getFullYear()
    console.log(Number(year))
    if(year >= getYear){
        console.log(control);
            return {invalidDate:true};
                }
    return null
}