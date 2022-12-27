import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { DateFormControl } from '../date-form-control';

@Component({
  selector: 'app-card-form',
  templateUrl: './card-form.component.html',
  styleUrls: ['./card-form.component.css'],
})
export class CardFormComponent implements OnInit {
  name = new FormControl('', [Validators.required, Validators.minLength(3)]);

  cardNumber = new FormControl('', [
    Validators.required,
    Validators.minLength(16),
    Validators.maxLength(16),
  ]);
  expiration = new DateFormControl('', [
    Validators.required,
    Validators.pattern(/^(0[1-9]|1[0-2])\/\d{2}$/),
  ]);
  securityCode = new FormControl('', [
    Validators.required,
    Validators.minLength(3),
    Validators.maxLength(3),
  ]);

  cardForm = new FormGroup({
    name: this.name,
    cardNumber: this.cardNumber,
    expiration: this.expiration,
    securityCode: this.securityCode,
  });

  constructor() {}

  ngOnInit(): void {}

  onSubmit(event: Event) {
    console.log(this.cardForm.value);
  }

  onResetClick() {
    this.cardForm.reset();
  }
}
