import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { DynamicLoadCompDirective } from '../../directive/dynamic-load-comp.directive';
import { BlogConfig } from '../../models/blog-config';
import { BlogModelComponent } from '../../models/blog-model';

@Component({
  selector: 'app-blog-profile',
  templateUrl: './blog-profile.component.html',
  styleUrls: ['./blog-profile.component.scss']
})
export class BlogProfileComponent implements OnInit {
  public currentAdIndex = -1;
  public interval: any;
  public isShow: boolean = true;
  public color: string = 'yellow';

  @Input() public dynamicComps: BlogConfig[] = [];
  @ViewChild(DynamicLoadCompDirective, {static: true}) public dynamicCompHost!: DynamicLoadCompDirective;

  public ngOnInit(): void {
    this.loadComponent();
    this.getAllComps();
  }

  public ngOnDestroy() {
    clearInterval(this.interval);
  }

  public loadComponent() {
    this.currentAdIndex = (this.currentAdIndex + 1) % this.dynamicComps.length;
    const adItem = this.dynamicComps[this.currentAdIndex];

    const viewContainerRef = this.dynamicCompHost.viewContainerRef;
    viewContainerRef.clear();

    const componentRef = viewContainerRef.createComponent<BlogModelComponent>(adItem.component);
    componentRef.instance.data = adItem.data;
  }

  public getAllComps() {
    this.interval = setInterval(() => {
      this.loadComponent();
    }, 3000);
  }

}
