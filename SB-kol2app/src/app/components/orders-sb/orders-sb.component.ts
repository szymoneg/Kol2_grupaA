import { Component, OnInit } from '@angular/core';
import {DataService} from "../../services/data.service";

@Component({
  selector: 'app-orders-sb',
  templateUrl: './orders-sb.component.html',
  styleUrls: ['./orders-sb.component.css']
})
export class OrdersSBComponent implements OnInit {

  public items$: any;

  constructor(private service: DataService) { }

  ngOnInit(): void {
    this.getAll()
  }

  getAll(){
    this.service.getAll().subscribe(response => {
      this.items$ = response
    })
  }

}
