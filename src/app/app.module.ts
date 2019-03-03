import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatProgressSpinnerModule, MatButtonModule,MatFormFieldModule,MatIconModule, MatCheckboxModule,MatButtonToggleModule,MatSelectModule, MatListModule, MatToolbarModule, MatInputModule, MatCardModule, MatTreeModule, MatTable, MatTableModule, MatExpansionModule, MatSortModule, MatProgressSpinner} from '@angular/material';


import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { SearchComponent } from './search/search.component';
import { ResultComponent } from './result/result.component';
import { HttpClientModule } from '@angular/common/http';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';


const appRoutes: Routes = [
   { path: 'result', component: ResultComponent },
 ];

@NgModule({
   declarations: [
      AppComponent,
      MenuComponent,
      SearchComponent,
      ResultComponent
   ],
   imports: [
      RouterModule.forRoot(
         appRoutes,
         { enableTracing: false } // <-- debugging purposes only
       ),
      BrowserModule,
      BrowserAnimationsModule,
      MatButtonModule,
      MatProgressSpinnerModule,
      MatCheckboxModule,
      MatToolbarModule,
      MatInputModule,
      HttpClientModule,
      MatCardModule,
      FlexLayoutModule,
      MatTableModule,
      MatTreeModule,
      MatListModule,
      MatSelectModule,
      FormsModule,
      MatButtonToggleModule,
      MatIconModule,
      MatFormFieldModule,
      MatExpansionModule,
      MatSortModule,
   ],
   providers: [],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
