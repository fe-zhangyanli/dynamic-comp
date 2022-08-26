import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlogComponent } from './blog.component';

export const blogRoutes: Routes = [
  {
      path: "",
      redirectTo: "blog",
      pathMatch: "prefix"
  },
  {
    path: 'blog',
    component: BlogComponent
  },
  {
      path: "**",
      redirectTo: "home",
      pathMatch: "prefix"
  }
];

@NgModule({
  imports: [RouterModule.forChild(blogRoutes)],
  exports: [RouterModule]
})
export class BlogRoutingModule { }
