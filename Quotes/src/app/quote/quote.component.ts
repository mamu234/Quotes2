import { Component, OnInit } from '@angular/core';
import { Quote} from '../quote'

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {

 
    quotes:Quote[]= [
  

      new Quote('Live as if there is no tommorrow', " African quotes","Ann Lisa",new Date(2020,3,14)),
      new Quote('Never never give up', "Black Panther","Wakanda Forever",new Date(2020,3,14)),
      new Quote('Never never give up',"Black Panther","Wakanda Forever",new Date(2020,3,14)),
      new Quote('Never never give up',"Black Panther","Wakanda Forever",new Date(2020,3,14)),
      new Quote('Never never give up',"Black Panther","Wakanda Forever",new Date(2020,3,14)),
    ];
    
  
    toggleDetails(index){
      this.quotes[index].showAuthor = !this.quotes[index].showAuthor;
    }
    completeQuote(isComplete, index){
      if (isComplete) {
        this.quotes.splice(index,1);
      }
    }
    deleteQuote(isComplete, index){
      if (isComplete) {
        let toDelete = confirm(`Are you sure you want to delete ${this.quotes[index].name}?`)
  
        if (toDelete){
          this.quotes.splice(index,1)
        }
      }
    }

    addQuote(isComplete, index){
      if (isComplete) {
        let toAdd = confirm(`Are you sure you want to add ${this.quotes[index].name}?`)
  
        if (toAdd){
          this.quotes.splice(index,1)
        }
      }
    }
    
    addNewQuote(quote){
      let quoteLength = this.quotes.length;
      Quote.id = quoteLength+1;
      Quote.completeDate = new Date(Quote.completeDate)
      this.quotes.push(quote)

    }
    constructor() { }

    ngOnInit() {
    }
  
  }