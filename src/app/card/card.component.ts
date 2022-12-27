import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
})
export class CardComponent implements OnInit {
  @Input() cardNumber?: string | null;
  @Input() name?: string | null;
  @Input() expiration?: string | null;

  constructor() {}

  ngOnInit(): void {}
}
