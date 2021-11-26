import { Component, OnInit } from '@angular/core';
import { Quote} from '../quote'

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

    quotes:Quote[]= [
  
     ('Live as if there is no tommorrow', " African quotes","Ann Lisa"),
    ('Never never give up', "Black Panther","Wakanda Forever"),
     ('Never never give up',"Black Panther","Wakanda Forever"),
      ('Never never give up',"Black Panther","Wakanda Forever"),
      ('Never never give up',"Black Panther","Wakanda Forever"),
    ];
  }

}
