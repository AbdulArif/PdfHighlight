import { Component, ElementRef, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'PdfHighlight';
  @ViewChild('pdfFrame', { static: false }) pdfFrame!: ElementRef<HTMLIFrameElement>;

  pdfUrl = 'https://www.ciel.org/Publications/climatechangeglossary.pdf';
  // iframe = this.pdfFrame.nativeElement;
  // safePdfUrl!: SafeResourceUrl;

  constructor(
    // public sanitizer: DomSanitizer,

  ) {
    // this.safePdfUrl = this.sanitizer.bypassSecurityTrustResourceUrl(this.pdfUrl);
  }
  ngAfterViewInit() {
    const iframe = this.pdfFrame.nativeElement;
    iframe.src = this.pdfUrl;

    iframe.onload = () => {
      console.log('PDF loaded successfully!');
      const pdfDoc = iframe.contentWindow?.document;
      const pages = pdfDoc?.querySelectorAll('.page');
      console.log("hello1")
    };
    //   const iframe = this.pdfFrame.nativeElement;
    //   const pdfUrl = 'https://www.ciel.org/Publications/climatechangeglossary.pdf';
    //   const textToHighlight = 'Disclaimer';
    //   // iframe.src = this.sanitizer.bypassSecurityTrustResourceUrl(pdfUrl);
    // iframe.onload = () => {
    //   const pdfDoc = iframe.contentWindow.document;
    //   const pages = pdfDoc.querySelectorAll('.page');
    //   console.log("hello1")
    //   pages.forEach((page: any) => {
    //     const textLayer = page.querySelector('.textLayer');
    //     const textItems = textLayer.querySelectorAll('.textItem');
    //     console.log("hello2")

    //     textItems.forEach((textItem: any) => {
    //       console.log("hello3")

    //       const text = textItem.textContent;
    //       if (text.includes(textToHighlight)) {
    //         textItem.style.backgroundColor = 'yellow';
    //         console.log("hello4")

    //       }
    //     });
    //   });
    // };

    //   // iframe.src = pdfUrl;
  }
  // ngOnInit(): void {
  //   const iframe = this.pdfFrame.nativeElement;
  //   const pdfUrl = 'https://www.ciel.org/Publications/climatechangeglossary.pdf';
  //   const textToHighlight = 'Disclaimer';
  //   iframe.src = this.sanitizer.bypassSecurityTrustResourceUrl(pdfUrl);
  // }
}
