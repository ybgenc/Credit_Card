import { FormControl } from "@angular/forms";

export class cardControl extends FormControl{

    override setValue(value: any, options: any){
        
        if(value.length >16){
            super.setValue(this.value,{...options, emitModelToViewChange : true})
            return
        }
        
        super.setValue(value, {...options, emitModelToViewChange : true})
    }
}
