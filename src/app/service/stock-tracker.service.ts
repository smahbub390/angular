import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { forkJoin, Observable } from 'rxjs';
import { StockDetails, StockInfo, StockResponse, StockSentiment } from '../const';

@Injectable({
  providedIn: 'root'
})
export class StockTrackerService {

  constructor(private httpClient: HttpClient) { }
  getStockData(symbol: string):Observable<StockResponse> {
    let searchStockUrl: string = 'https://finnhub.io/api/v1/search?token=bu4f8kn48v6uehqi3cqg&q='+symbol;
    let detailsStockUrl: string = 'https://finnhub.io/api/v1/quote?token=bu4f8kn48v6uehqi3cqg&symbol='+symbol;
    const stockData = this.httpClient.get<StockInfo>(searchStockUrl);
  
    const stockDetails = this.httpClient.get<StockDetails>(detailsStockUrl);
    return forkJoin({ data: stockData, details: stockDetails });

  }
  getStockSentiment(stockSymbol: string):Observable<StockSentiment> {
    let url:string = `https://finnhub.io/api/v1/stock/insider-sentiment?symbol=${stockSymbol}&from=2022-01-01&to=2022-09-26&token=bu4f8kn48v6uehqi3cqg`
    return this.httpClient.get<StockSentiment>(url);

  }
}
