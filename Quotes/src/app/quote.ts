export class Quote {
    showAuthor: boolean;
    constructor(public theQuote:string ,public name: string,public author: string, public completeDate: Date){
      this.showAuthor=false;
    }
}
