import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

export const appRoutes: Routes = [
  {
      path: 'blog',
      loadChildren: () => import('./modules/blog/blog.module')
        .then(m => m.BlogModule),
  },
  {
      path: "",
      redirectTo: "blog",
      pathMatch: "prefix"
  },
  {
      path: "**",
      redirectTo: "home",
      pathMatch: "prefix"
  }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
