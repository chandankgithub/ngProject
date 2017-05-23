import { FormControl } from '@angular/forms'

export class UserFormValidator{
    
    static validateEmail(control: FormControl){
        console.log(control);
        var controlValue = control.value;
        let REG_EXP = /[^ @]*@[^ @]*/;

        /**this will also work */
            // return REG_EXP.test(controlValue) ? {validEmail: true}: {
            //     validEmail: false
            // }
        /*** */
         return REG_EXP.test(controlValue) ? null: {
            validEmail: false
        }
        
    }
}