import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from '../app/module/dashboard/dashboard.component';
import { TutorialsComponent } from '../app/module/tutorials/tutorials.component';
import {AddComponent } from '../app/module/add/add.component';

const routes: Routes = [{
	path: '',
	component: DashboardComponent,
	children: [{
		path: 'tutorials',
		component: TutorialsComponent
	},{
		path: 'add',
		component: AddComponent
	},

	{ path: '', redirectTo: '/tutorials', pathMatch: 'full' }

]
}];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: false })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
