import { AbstractControl } from "@angular/forms";

export function validateName(control:AbstractControl){
    let dummyData:string[] = ['test','dummy','test test','user'];
    for(let i = 0 ; i < dummyData.length ; i++){
        if(control.value === dummyData[i]){
            return {validName:true};
            }
}
return null
}