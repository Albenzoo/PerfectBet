import { Component, OnInit, ViewChild } from '@angular/core';
import { HttpService } from '../service/http.service';
import { MatTableDataSource, MatSort, Sort } from '@angular/material';
import { serializePath, serializePaths } from '@angular/router/src/url_tree';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})


export class ResultComponent implements OnInit {
  allMatches: any;
  lock = false;
  dataSource;
  sortedData: odds[];

  myMatches: matchBets[] = new Array;
  /* oddsArray: odds[] = new Array; */
  displayedColumns: string[] = ['company', 'home', 'X', 'away', 'probHome', 'probX', 'probAway', 'probSum'];

  @ViewChild(MatSort) sort: MatSort;


  constructor(private httpService: HttpService) { }


  public updateResult(apiResponse: any) {
    this.allMatches = apiResponse;

    //cicle the matches
    for (let currentMatch of this.allMatches) {
      //store home team (e.g. AC Milan - Juventus ---> Milan) 
      let homeTeam = currentMatch.teams[0];
      //store away team (e.g. AC Milan - Juventus ---> Juventus) 
      let awayTeam = currentMatch.teams[1];
      //store the series (e.g. Serie A)
      let series = currentMatch.sport_nice;

      let oddsArray: odds[] = [];


      //cicle the odds
      for (let currentOdd of currentMatch.sites) {
        //store odds company (e.g. William Hill) 
        let company = currentOdd.site_nice;
        //store odd for home team win (e.g. 2.06) 
        let home = currentOdd.odds.h2h[0];
        //store odd for away team win (e.g. 3.2) 
        let away = currentOdd.odds.h2h[1];
        //store odd for draw (e.g. 3.5) 
        let X = currentOdd.odds.h2h[2];

        //calculate the probability given to home club win
        let probHome = (1 / home) * 100;
        //calculate the probability given to draw
        let probX = (1 / X) * 100;
        //calculate the probability given to away club win
        let probAway = (1 / away) * 100;
        //calculate the sum of the probabilities
        let probSum = probHome + probX + probAway;


        oddsArray.push({
          'company': company,
          'home': home,
          'X': X,
          'away': away,
          'probHome': probHome,
          'probX': probX,
          'probAway': probAway,
          'probSum': probSum,
        });

      }


      //insert here the perfect bet function
      let perfectArray = this.findPerfectBet(oddsArray);


      //Add the record
      this.myMatches.push({
        'homeTeam': homeTeam,
        'awayTeam': awayTeam,
        'series': series,
        'odds': oddsArray,
        'perfectBet': perfectArray,
      });
    }
    console.log("all match saved: ", this.myMatches);



  }

  ngOnInit() {

  }


  findPerfectBet(oddsArray: odds[]) {
    let perfectArray: perfectBet[] = new Array;

    //cicle 1 probabilities
    for (let current1 of oddsArray) {
      let fixed1Prob = current1.probHome;
      let fixed1 = current1.home;
      let company1 = current1.company;


      //cicle X probabilities
      for (let currentX of oddsArray) {
        let fixedXProb = currentX.probX;
        let fixedX = current1.X;
        let companyX = currentX.company;

        //cicle 2 probabilities
        for (let current2 of oddsArray) {
          let fixed2Prob = current2.probAway;
          let fixed2 = current2.away;
          let company2 = current2.company;


          //calculate the sum of the probabilities
          let probSumOdd = fixed1Prob + fixedXProb + fixed2Prob;

          //check if is a perfect bet
          if (probSumOdd < 100) {
            //yes, is a perfect bet

            //Add the record to the PerfectBets array
            perfectArray.push({
              'companyHome': company1,
              'companyX': companyX,
              'companyAway': company2,
              'home': fixed1,
              'X': fixedX,
              'away': fixed2,
              'probHome': fixed1Prob,
              'probX': fixedXProb,
              'probAway': fixed2Prob,
              'probSum': probSumOdd,
            });

          }

        }

      }

    }
    return perfectArray;

  }



  sortData(sort: Sort, currentOdd: odds[], index: number) {
    const data = currentOdd.slice();
    if (!sort.active || sort.direction === '') {
      this.myMatches[index].odds = data;
      return;
    }

    this.myMatches[index].odds = data.sort((a, b) => {
      const isAsc = sort.direction === 'asc';
      switch (sort.active) {
        case 'company': return compare(a.company, b.company, isAsc);
        case 'home': return compare(a.home, b.home, isAsc);
        case 'X': return compare(a.X, b.X, isAsc);
        case 'away': return compare(a.away, b.away, isAsc);
        case 'probHome': return compare(a.probHome, b.probHome, isAsc);
        case 'probX': return compare(a.probX, b.probX, isAsc);
        case 'probAway': return compare(a.probAway, b.probAway, isAsc);
        case 'probSum': return compare(a.probSum, b.probSum, isAsc);
        default: return 0;
      }
    });
  }
}

function compare(a: number | string, b: number | string, isAsc: boolean) {
  return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}

export interface matchBets {
  homeTeam: string;
  awayTeam: string;
  series: string;
  odds: odds[];
  perfectBet: perfectBet[],
}

export interface odds {
  company: string;
  home: number;
  X: number;
  away: number;
  probHome: number;
  probX: number;
  probAway: number;
  probSum: number;
}
export interface perfectBet {
  companyHome: string;
  companyX: string;
  companyAway: string;
  home: number;
  X: number;
  away: number;
  probHome: number;
  probX: number;
  probAway: number;
  probSum: number;
}
