import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// PAGES COMPONENTS
import { FontTesterComponent } from '../font-tester/font-tester.component';
import { JsonFormatterComponent } from '../json-formatter/json-formatter.component';

// SHARED COMPONENTS
import { ButtonComponent } from '../../shared/components';

@NgModule({
    declarations: [],
    imports: [CommonModule, ButtonComponent],
    exports: [],
})
export class PagesModule {}
