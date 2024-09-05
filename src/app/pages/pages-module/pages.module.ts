import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent, LayoutComponent, NavbarComponent } from '../../shared/components';

@NgModule({
    declarations: [],
    imports: [CommonModule, ButtonComponent, LayoutComponent, NavbarComponent],
    exports: [ButtonComponent, LayoutComponent, NavbarComponent],
})
export class PagesModule {}
