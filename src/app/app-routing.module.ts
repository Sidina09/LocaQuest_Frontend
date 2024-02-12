import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./modules/user/user.module').then((m) => m.UserModule),

  },
  {
    path: 'list-questions',
    loadChildren: () =>
      import('./modules/question/question.module').then((m) => m.QuestionModule),

  },

  {
    path: '**',
    redirectTo: 'error/404',
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
