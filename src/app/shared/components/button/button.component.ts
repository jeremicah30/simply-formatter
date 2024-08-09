import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'app-button',
    standalone: true,
    imports: [],
    templateUrl: './button.component.html',
    styleUrl: './button.component.scss',
})
export class ButtonComponent implements OnInit {
    @Input() button_title: string = 'Button';
    @Input() disabled: boolean = false;

    ngOnInit(): void {
        console.log(this.disabled);
    }
}
