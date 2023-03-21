import { FormControl } from "@angular/forms";

export class DateControl extends FormControl {

    override setValue(value: string | null, options: any) {
  
      if (!value) {
        super.setValue("", { ...options, emitModelToViewChange: true });
        return;
      }
      if (value?.match(/[^0-9|\/]/gi)) {  
        super.setValue(this.value, { ...options, emitModelToViewChange: true });
        return;
      }
      if (value.length > 5) {
        super.setValue(this.value, { ...options, emitModelToViewChange: true });
        return;
      }
  
      let newValue = value.replace(/[^\d]/g, '');
      if (newValue.length > 2) {
        newValue = `${newValue.slice(0, 2)}/${newValue.slice(2)}`;
      }
      super.setValue(newValue, { ...options, emitModelToViewChange: true });
    }
  }
  