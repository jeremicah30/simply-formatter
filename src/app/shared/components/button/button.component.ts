import { Component, OnInit, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-button',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './button.component.html',
    styleUrl: './button.component.scss',
})
export class ButtonComponent implements OnInit {
    @Input() button_title: string = 'Button';
    @Input() btn_disabled: boolean = false;
    @Input() btn_type: string = 'submit';

    ngOnInit(): void {}
}
