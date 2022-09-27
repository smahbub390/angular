import { Component } from '@angular/core';
import { forkJoin, map, mergeMap,concatMap, zip, mergeAll, Observable, combineLatest, from } from 'rxjs';
import { of } from 'rxjs/internal/observable/of';
import { StockTrackerService } from './service/stock-tracker.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
}

