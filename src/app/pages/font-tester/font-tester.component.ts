import { Component, OnInit } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';

import { PagesModule } from '../pages-module/pages.module';

@Component({
    selector: 'app-font-tester',
    standalone: true,
    imports: [PagesModule, ReactiveFormsModule],
    templateUrl: './font-tester.component.html',
    styleUrl: './font-tester.component.scss',
})
export class FontTesterComponent implements OnInit {
    font = new FormControl('');
    currentFontFamily: string | null = null;
    placeholder = '';
    fontName = '';

    ngOnInit(): void {}

    public onUploadFile(event: Event) {
        const input = event.target as HTMLInputElement;

        console.log(event, 'e');

        if (input.files && input.files.length > 0) {
            const uploadedFile = input.files[0]; // Get the first uploaded file

            const reader = new FileReader();

            reader.onload = (e: any) => {
                // Extract the font name from the file (e.g., remove the extension)
                const fontName = uploadedFile.name.split('.')[0];

                // Use the loaded data (array buffer) to create a new FontFace
                const fontData = e.target.result;
                const fontFace = new FontFace(fontName, fontData);

                console.log(fontData, 'fontData');

                // Load and add the font to the document
                fontFace
                    .load()
                    .then((loadedFont) => {
                        (document.fonts as any).add(loadedFont);
                        this.currentFontFamily = fontName;

                        this.placeholder = `This is a ${fontName} font`;
                        this.fontName = fontName;
                        console.log(`${fontName} font added successfully`);
                    })
                    .catch((error) => {
                        console.error('Failed to load font:', error);
                    });
            };

            // Read the uploaded font file as an ArrayBuffer
            reader.readAsArrayBuffer(uploadedFile);
        }
    }
}
