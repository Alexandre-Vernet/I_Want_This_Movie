import { Component } from '@angular/core';
import { RefresherCustomEvent } from '@ionic/angular';
import { MovieService } from "../movie/movie.service";

@Component({
    selector: 'app-home',
    templateUrl: 'home.component.html',
    styleUrls: ['home.component.scss'],
})
export class HomeComponent {

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
