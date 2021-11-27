import { Component, OnInit,Output,EventEmitter } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quote-form',
  templateUrl: './quote-form.component.html',
  styleUrls: ['./quote-form.component.css']
})
export class QuoteFormComponent implements OnInit {



  newQuote = new Quote("","","",new Date());
  @Output() addQuote = new EventEmitter<Quote>();
  
    submitQuote(){
  this.addQuote.emit(this.newQuote);
    }
  

  @Output()isComplete = new EventEmitter<boolean>();
  
  
  constructor() { }
  quoteComplete(complete:boolean){
    this.isComplete.emit(complete);
    
  }
  ngOnInit(): void {
  }

}
