import { Component, OnInit } from '@angular/core';
import { PagesModule } from '../pages-module/pages.module';

@Component({
    selector: 'app-font-tester',
    standalone: true,
    imports: [PagesModule],
    templateUrl: './font-tester.component.html',
    styleUrl: './font-tester.component.scss',
})
export class FontTesterComponent implements OnInit {
    ngOnInit(): void {}
}
