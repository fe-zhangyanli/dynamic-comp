import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-blog-tag',
  templateUrl: './blog-tag.component.html',
  styleUrls: ['./blog-tag.component.scss']
})
export class BlogTagComponent implements OnInit {

  @Input() public data: any;

  constructor() { }

  public ngOnInit(): void {
  }

}
