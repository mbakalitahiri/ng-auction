import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'nga-stars',
  templateUrl: './stars.component.html',
  styleUrls: ['./stars.component.css']
})
export class StarsComponent implements OnInit {

  @Input() rating;
  constructor() { }

  ngOnInit() {
  }

}
