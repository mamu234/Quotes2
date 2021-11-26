import { Directive, ElementRef, HostListener} from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {
  textDeco: any;

  constructor(private elem:ElementRef) { }

    @HostListener("click") onClicks(){
      this.textDeco("light-blue")
    }
  
    @HostListener("dblclick") onDoubleClicks(){
      this.textDeco("None")
    this.elem.nativeElement.style.textDecoration='action';
 
    
  }
    
  }


    