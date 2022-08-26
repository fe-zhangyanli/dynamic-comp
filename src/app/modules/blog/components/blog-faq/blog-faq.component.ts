import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-blog-faq',
  templateUrl: './blog-faq.component.html',
  styleUrls: ['./blog-faq.component.scss']
})
export class BlogFaqComponent implements OnInit {
  @Input() public data: any;
  
  constructor() { }

  public ngOnInit(): void {
  }

}
