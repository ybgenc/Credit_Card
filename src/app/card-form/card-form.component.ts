import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import {DateControl} from '../date-control';
import {cvvControl} from '../cvv-control';
import {cardControl} from '../card-control';

@Component({
  selector: 'app-card-form',
  templateUrl: './card-form.component.html',
  styleUrls: ['./card-form.component.css']
})
export class CardFormComponent {
  cardForm = new FormGroup({

    name: new FormControl('', [
      Validators.required,
      Validators.minLength(3)
    ]),

    cardNumber : new cardControl ('', [
      Validators.required,
      Validators.minLength(16),
      Validators.maxLength(16)
    ]),

    expireDate : new DateControl ('', [
      Validators.required,
      Validators.pattern(/^(0[1-9]|1[0-2])\/\d{2}$/)
    ]),
    securityNumber : new cvvControl ('',[
      Validators.required,
      Validators.minLength(3),
      Validators.maxLength(3)
    ])

  })

  cleanForm() {
    this.cardForm.reset({
      name: '',
      cardNumber: '',
      expireDate: '',
      securityNumber: ''
    });
  }
  
  
}
