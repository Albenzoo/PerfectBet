import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
import { FormControl } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { HttpService } from '../service/http.service';
import { ResultComponent } from '../result/result.component';






export interface championship {
  value: string;
  viewValue: string;
}

export interface sport {
  disabled?: boolean;
  name: string;
  championships: championship[];
}


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})



export class SearchComponent implements OnInit {

  @Input() myResult: ResultComponent;
  noMatchFound:boolean = null;


  sports: sport[] = [
    {
      name: 'Soccer',
      championships: [
        { value: 'soccer_australia_aleague', viewValue: 'A-League' },
        { value: 'soccer_belgium_first_div', viewValue: 'Belgium First Div' },
        { value: 'soccer_brazil_campeonato', viewValue: 'Brazil Serie A' },
        { value: 'soccer_denmark_superliga', viewValue: 'Denmark Superliga' },
        { value: 'soccer_efl_champ', viewValue: 'Championship' },
        { value: 'soccer_england_league1', viewValue: 'League 1' },
        { value: 'soccer_epl', viewValue: 'Premier League' },
        { value: 'soccer_fa_cup', viewValue: 'FA Cup' },
        { value: 'soccer_france_ligue_one', viewValue: 'Ligue 1' },
        { value: 'soccer_germany_bundesliga', viewValue: 'Bundesliga' },
        { value: 'soccer_italy_serie_a', viewValue: 'Serie A' },
        { value: 'soccer_netherlands_eredivisie', viewValue: 'Eredivisie' },
        { value: 'soccer_portugal_primeira_liga', viewValue: 'Primeira Liga' },
        { value: 'soccer_spain_la_liga', viewValue: 'La Liga' },
        { value: 'soccer_uefa_champs_league', viewValue: 'UEFA Champions League' },
        { value: 'soccer_uefa_europa_league', viewValue: 'UEFA Europa League' },
        { value: 'soccer_usa_mls', viewValue: 'MLS' },
      ]
    },
    /* {
      name: 'NBA',
      championships: [
        { value: 'squirtle-3', viewValue: 'Squirtle' },
        { value: 'psyduck-4', viewValue: 'Psyduck' },
        { value: 'horsea-5', viewValue: 'Horsea' }
      ]
    },
    {
      name: 'FNL',
      disabled: true,
      championships: [
        { value: 'charmander-6', viewValue: 'Charmander' },
        { value: 'vulpix-7', viewValue: 'Vulpix' },
        { value: 'flareon-8', viewValue: 'Flareon' }
      ]
    },
    {
      name: 'Golf',
      championships: [
        { value: 'mew-9', viewValue: 'Mew' },
        { value: 'mewtwo-10', viewValue: 'Mewtwo' },
      ]
    } */
  ];

  constructor(private httpService: HttpService) { }

  public selectedTournament(result: any) {
    console.log(result);
  }

  ngOnInit() {
    console.log(this.sports);
  }

  search() {
    console.log("Start Searching...");
    this.httpService.loading = true;

    //let apiResult = this.httpService.getMatch();

    this.httpService.getMatch()
      // resp is of type `HttpResponse<Config>`
      .subscribe((data: any) => {
        let apiResult = data.data;
        if (apiResult.length == 0) {
          this.noMatchFound = true;
          this.httpService.showResult = false;
          this.httpService.loading = false;
          return;
        }
        this.noMatchFound = false;
        this.myResult.updateResult(apiResult);
        this.httpService.showResult = true;
        this.httpService.loading = false;
      });

  }



  onSelectedTournament(newSeries) {
    console.log(newSeries);
    this.httpService.setSeries(newSeries);
  }
  onSelectedRegion(newRegion) {
    console.log(newRegion);
    this.httpService.setRegion(newRegion);
  }

}
