import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-orders-item-sb',
  templateUrl: './orders-item-sb.component.html',
  styleUrls: ['./orders-item-sb.component.css']
})
export class OrdersItemSBComponent implements OnInit {

  @Input() id?: number
  @Input() title?: string;
  @Input() text?: string;
  @Input() image?: string;
  @Input() price?: number;

  constructor() { }

  ngOnInit(): void {
  }

}
