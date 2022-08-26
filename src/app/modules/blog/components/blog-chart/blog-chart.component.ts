import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-blog-chart',
  templateUrl: './blog-chart.component.html',
  styleUrls: ['./blog-chart.component.scss']
})
export class BlogChartComponent implements OnInit {

  @Input() public data: any;
  
  constructor() { }

  public ngOnInit(): void {
  }

}
