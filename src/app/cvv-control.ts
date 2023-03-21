import { FormControl } from "@angular/forms";
export class cvvControl extends FormControl {

    override setValue(value: string , options: any) {

        if (value.length > 3) {
            super.setValue(this.value, { ...options, emitModelToViewChange: true });
            return;
          }
        super.setValue(value, { ...options, emitModelToViewChange: true });
      
}   
}