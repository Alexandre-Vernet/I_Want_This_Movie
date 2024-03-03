import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './home.component';
import { HomePageRoutingModule } from './home-routing.module';
import { MovieModule } from "../movie/movie.module";

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        HomePageRoutingModule,
        MovieModule,
    ],
    declarations: [HomeComponent]
})
export class HomePageModule {
}
