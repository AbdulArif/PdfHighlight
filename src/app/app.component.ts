import { Component, ElementRef, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'PdfHighlight';
  @ViewChild('pdfFrame') pdfFrame!: ElementRef;

  ngAfterViewInit() {
    const iframe = this.pdfFrame.nativeElement;
    const pdfUrl = 'https://www.ciel.org/Publications/climatechangeglossary.pdf';
    const textToHighlight = 'Disclaimer';

    iframe.onload = () => {
      const pdfDoc = iframe.contentWindow.document;
      const pages = pdfDoc.querySelectorAll('.page');

      pages.forEach((page: any) => {
        const textLayer = page.querySelector('.textLayer');
        const textItems = textLayer.querySelectorAll('.textItem');

        textItems.forEach((textItem: any) => {
          const text = textItem.textContent;
          if (text.includes(textToHighlight)) {
            textItem.style.backgroundColor = 'yellow';
          }
        });
      });
    };

    iframe.src = pdfUrl;
  }
}
