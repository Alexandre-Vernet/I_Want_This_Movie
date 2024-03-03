import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListMoviesComponent } from "./list-movies/list-movies.component";
import { AddMovieComponent } from "./add-movie/add-movie.component";
import { IonicModule } from "@ionic/angular";
import { ReactiveFormsModule } from "@angular/forms";

@NgModule({
    declarations: [ListMoviesComponent, AddMovieComponent],
    exports: [
        ListMoviesComponent,
        AddMovieComponent
    ],
    imports: [CommonModule, IonicModule, ReactiveFormsModule]
})
export class MovieModule {
}
