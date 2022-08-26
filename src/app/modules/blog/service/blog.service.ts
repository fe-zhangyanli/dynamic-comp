import { Injectable } from '@angular/core';
import { BlogChartComponent } from '../components/blog-chart/blog-chart.component';
import { BlogFaqComponent } from '../components/blog-faq/blog-faq.component';
import { BlogTagComponent } from '../components/blog-tag/blog-tag.component';
import { BlogConfig } from '../models/blog-config';

@Injectable()
export class BlogService {

  constructor() { }

  public getDynamicComponents() {
    return [
      new BlogConfig(
        BlogTagComponent,
        { name: '标签列表', bio: 'angular' }
      ),
      new BlogConfig(
        BlogFaqComponent,
        { name: 'FAQ', bio: 'httpClientModule问题' }
      ),
      new BlogConfig(
        BlogChartComponent,
        { headline: '柱状图', body: 'Submit your resume today!' }
      )
    ];
  }
}
