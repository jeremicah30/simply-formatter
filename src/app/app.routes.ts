import { Routes } from '@angular/router';
import { FontTesterComponent, JsonFormatterComponent } from './pages';

export const routes: Routes = [
    {
        path: '',
        component: JsonFormatterComponent,
    },
    {
        path: 'json-formatter',
        component: JsonFormatterComponent,
    },
    {
        path: 'font-tester',
        component: FontTesterComponent,
    },
];
