import { Component, OnInit } from '@angular/core';
import { findIndex, from, mergeAll, Subscription } from 'rxjs';
import { StockDetails, StockInfo, StockResponse, StockResult } from '../const';
import { StockTrackerService } from '../service/stock-tracker.service';

@Component({
  selector: 'app-trade-home',
  templateUrl: './trade-home.component.html',
  styleUrls: ['./trade-home.component.css']
})

export class TradeHomeComponent implements OnInit {

  title = 'Stock';
  stockSymbol: string = "";
  enteredSymbols: Array<string> = [];
  result: Array<StockResult> = [];
  dataLoaded: boolean = false;


  subscriptionData$!: Subscription;
  subscriptionDetails$!: Subscription;
  constructor(private stockTrackerService: StockTrackerService) { }

  getStockDetails() {
    let stock = this.stockSymbol.toUpperCase();
    this.dataLoaded = true;
    if (this.enteredSymbols.indexOf(stock) < 0) {
      this.enteredSymbols.push(stock);
      localStorage.setItem('stockSymbols', JSON.stringify(this.enteredSymbols));
    }
    this.dataResponse(stock);
  }

  dataResponse(stock: string) {
    this.stockTrackerService.getStockData(stock).subscribe((res: StockResponse) => {
      let stocInfo = res.data.result.filter((obj => { return obj.symbol == stock }));
      //  let stockData: StockInfo =  res.data.result.filter((obj=>{return obj.symbol==stock}))
      this.result.push({
        'data': stocInfo[0],
        'details': res.details
      });
      this.dataLoaded = false;
    })
  }
  removeStock(index: number) {
    this.result.splice(index, 1);
    this.enteredSymbols.splice(index, 1);
    localStorage.setItem('stockSymbols', JSON.stringify(this.enteredSymbols));
  }


  ngOnDestroy() {
    // this.result = []; 
  }
  ngOnInit(): void {
    let stockSymbolStore = JSON.parse(localStorage.getItem('stockSymbols')!);
    if (stockSymbolStore != null) {
      this.enteredSymbols = stockSymbolStore;
    }
    if (this.enteredSymbols.length > 0) {
      this.dataLoaded = true;
      this.enteredSymbols.forEach((stock: string) => {
        this.dataResponse(stock);
      });
    }

  }
}
