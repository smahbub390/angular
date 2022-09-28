import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { StockTrackerService } from '../service/stock-tracker.service';
import { Month, StockSentiment, StockSentimentData } from '../const';

@Component({
  selector: 'app-stock-sentiment',
  templateUrl: './stock-sentiment.component.html',
  styleUrls: ['./stock-sentiment.component.css']
})
export class StockSentimentComponent implements OnInit {
sentimentdata:Array<StockSentimentData> = [];
month:Array<string> = Month;
symbol:string = this.route.snapshot.params['symbol'];
  constructor(private stockTrackerService: StockTrackerService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.stockTrackerService.getStockSentiment(this.symbol).subscribe((response:StockSentiment) =>{
      this.sentimentdata = response.data;
    
    })
  }

}
