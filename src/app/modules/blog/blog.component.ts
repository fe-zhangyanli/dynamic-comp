import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { BlogConfig } from './models';
import { BlogService } from './service';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent implements OnInit {

  public dynamicComps: BlogConfig[] = [];

  constructor(private blogService: BlogService) {}

  public ngOnInit() {
    this.dynamicComps = this.blogService.getDynamicComponents();
  }

}
