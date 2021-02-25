import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RouterModule } from '@angular/router';
import { TaskCreatorComponent } from './task-creator/task-creator.component';

const routes = [
  { path: '', component: DashboardComponent },
  { path: 'creator', component: TaskCreatorComponent}
];

@NgModule({
  declarations: [DashboardComponent, TaskCreatorComponent],
  imports: [CommonModule, RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TaskModule {}
