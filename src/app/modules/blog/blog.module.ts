import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlogRoutingModule } from './blog-routing.module';
import { BlogComponent } from './blog.component';
import { BackTopComponent } from './components/back-top/back-top.component';
import { BlogChartComponent } from './components/blog-chart/blog-chart.component';
import { BlogFaqComponent } from './components/blog-faq/blog-faq.component';
import { BlogProfileComponent } from './components/blog-profile/blog-profile.component';
import { BlogTagComponent } from './components/blog-tag/blog-tag.component';
import { DynamicLoadCompDirective } from './directive/dynamic-load-comp.directive';
import { HighlightDirective } from './directive/highlightdirective';
import { UnlessDirective } from './directive/unless.directive';
import { BlogService } from './service/blog.service';

@NgModule({
  declarations: [
    BlogComponent,
    BlogTagComponent,
    BlogChartComponent,
    BlogFaqComponent,
    DynamicLoadCompDirective,
    BlogProfileComponent,
    BackTopComponent,
    UnlessDirective,
    HighlightDirective
  ],
  imports: [
    CommonModule,
    BlogRoutingModule
  ],
  providers: [ BlogService ]
})
export class BlogModule { }
