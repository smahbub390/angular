export const Month:any =['January', 'February', "March",'April','May',"June",'July',"August",'September','October', 'November','December'];
export interface StockResult{
    data:{
        description: string;
        displaySymbol: string;
        symbol: string;
        type: string;
      }, details: StockDetails
  }
  
  
export interface StockResponse{
    data: StockInfo; 
    details: StockDetails;
  }

  export interface StockData { 
    result: {
        description: string;
        displaySymbol: string;
        symbol: string;
        type: string;
      };
  }
export interface StockInfo { 
    result: {
        description: string;
        displaySymbol: string;
        symbol: string;
        type: string;
      }[];
  }
  
 export interface StockDetails {
    c: number;
    d: number;
    o:number;
    h:number;
  }
 
  export interface StockSentiment{ 
    data:{
        symbol: string;
        year: number;
        month: number;
        change: number;
        mspr: number;
      }[];
  }

  export interface StockSentimentData{ 
    
        symbol: string;
        year: number;
        month: number;
        change: number;
        mspr: number; 
  }
 