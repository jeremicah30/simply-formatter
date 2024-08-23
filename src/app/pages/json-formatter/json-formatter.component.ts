import { Component, OnInit } from '@angular/core';
import { ButtonComponent } from '../../shared/components';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';

@Component({
    selector: 'app-json-formatter',
    standalone: true,
    imports: [ButtonComponent, ReactiveFormsModule],
    templateUrl: './json-formatter.component.html',
    styleUrl: './json-formatter.component.scss',
})
export class JsonFormatterComponent implements OnInit {
    JsonFormGroup!: FormGroup;
    prettifiedJson: string = '';

    constructor(private fb: FormBuilder) {}

    ngOnInit(): void {
        this.initializeJsonFormGroup();
    }

    private initializeJsonFormGroup() {
        this.JsonFormGroup = this.fb.group({
            jsonInput: [null, Validators.required],
        });

        this.JsonFormGroup.get('jsonInput')?.valueChanges.subscribe((value) => {
            this.isValueValidJson();
        });
    }

    public onSubmitBtn(): void {
        const jsonString = this.JsonFormGroup.get('jsonInput')?.value;
        const jsonObject = JSON.parse(jsonString);
        this.prettifiedJson = JSON.stringify(jsonObject, null, 4);
    }

    public isValueValidJson(): boolean {
        const value = this.JsonFormGroup.get('jsonInput')?.value;

        try {
            JSON.parse(value);
            return true;
        } catch (error) {
            console.error('Invalid JSON:', error);
            return false;
        }
    }
}
