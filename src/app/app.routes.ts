import { Routes } from '@angular/router';
import { LayoutComponent } from './shared/components';
import { JsonFormatterComponent } from './pages';

export const routes: Routes = [
  {
    path: '',
    component: JsonFormatterComponent,
  },
  {
    path: 'json-formatter',
    component: JsonFormatterComponent,
  },
];
