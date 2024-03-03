import { Component } from '@angular/core';
import { MovieService } from "../movie.service";
import { RefresherCustomEvent } from "@ionic/angular";

@Component({
    selector: 'app-list-movies',
    templateUrl: './list-movies.component.html',
    styleUrls: ['./list-movies.component.scss'],
})
export class ListMoviesComponent {

    movies$ = this.movieService.getMovies();
    openModalAddMovie = false;

    constructor(
        private readonly movieService: MovieService
    ) {
    }

    refresh(ev: any) {
        setTimeout(() => {
            (ev as RefresherCustomEvent).detail.complete();
        }, 3000);
    }
}
