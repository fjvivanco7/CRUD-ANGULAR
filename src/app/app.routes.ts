// src/app/app.routes.ts

import { Routes } from '@angular/router';


export const routes: Routes = [
	{
		path: '',
		title: 'Inicio',
		loadComponent: () => import('./home.component').then(m => m.HomeComponent)
	},
{
	path: 'personas',
	loadComponent: () => import('./persons/person-list.component').then(m => m.PersonListComponent)
},
{
	path: 'personas/new',
	loadComponent: () => import('./persons/person-form.component').then(m => m.PersonFormComponent)
},
{
	path: 'personas/:id/edit',
	loadComponent: () => import('./persons/person-form.component').then(m => m.PersonFormComponent)
},
	{
		path: 'products',
		loadComponent: () => import('./products/product-list.component').then(m => m.ProductListComponent)
	},
	{
		path: 'products/new',
		loadComponent: () => import('./products/product-form.component').then(m => m.ProductFormComponent)
	},
	{
		path: 'products/:id/edit',
		loadComponent: () => import('./products/product-form.component').then(m => m.ProductFormComponent)
	},
	{ path: '**', redirectTo: 'products' }
];