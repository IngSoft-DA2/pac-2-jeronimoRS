import { Routes } from '@angular/router';
import { ConsignaComponent } from './shared/components/consigna/consigna.component';
import { ReflectionPageComponent } from './shared/components/features/reflection/pages/reflection-page/reflection-page.component';
import { reflectionGuard } from './core/guards/reflection.guard';

export const routes: Routes = [
  { path: '', component: ConsignaComponent, pathMatch: 'full' },
  { path: 'reflection', component: ReflectionPageComponent, canActivate: [reflectionGuard] },
  { path: '**', redirectTo: '' }
];
