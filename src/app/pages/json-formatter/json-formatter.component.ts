import { Component } from '@angular/core';
import { ButtonComponent } from '../../shared/components';

@Component({
    selector: 'app-json-formatter',
    standalone: true,
    imports: [ButtonComponent],
    templateUrl: './json-formatter.component.html',
    styleUrl: './json-formatter.component.scss',
})
export class JsonFormatterComponent {}
