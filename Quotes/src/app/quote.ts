export class Quote {
    showAuthor: boolean;
  static completeDate: Date;
  static id: number;
    constructor(public theQuote:string ,public name: string,public author: string, public completeDate: Date){
      this.showAuthor=false;
    }
}
