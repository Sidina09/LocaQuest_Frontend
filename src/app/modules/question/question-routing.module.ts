import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { QuestionComponent } from './question.component';
import { ListQuestionsComponent } from './list-questions/list-questions.component';

const routes: Routes = [
  {
    path: '',
    component: QuestionComponent,
    children: [
      {
        path: 'list-questions',
        component: ListQuestionsComponent,
      },

      { path: '', redirectTo: 'list-questions', pathMatch: 'full' },
      { path: '**', redirectTo: '404', pathMatch: 'full' },



    ],

  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class QuestionRoutingModule { }
