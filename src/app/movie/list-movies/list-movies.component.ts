import { Component, OnDestroy } from '@angular/core';
import { MovieService } from "../movie.service";
import { RefresherCustomEvent } from "@ionic/angular";
import { Movie } from "../Movie";
import { distinctUntilChanged, Observable, of, Subject, takeUntil } from "rxjs";

@Component({
    selector: 'app-list-movies',
    templateUrl: './list-movies.component.html',
    styleUrls: ['./list-movies.component.scss'],
})
export class ListMoviesComponent implements OnDestroy {

    movies$: Observable<Movie[]> = this.movieService.getMovies();
    openModalAddMovie = false;

    unsubscribe$: Subject<void> = new Subject<void>();

    constructor(
        protected readonly movieService: MovieService
    ) {
    }

    ngOnDestroy() {
        this.unsubscribe$.next();
        this.unsubscribe$.complete();
    }

    refresh(ev: any) {
        setTimeout(() => {
            (ev as RefresherCustomEvent).detail.complete();
        }, 3000);
    }

    addNewMovie() {
        this.movies$
            .pipe(
                distinctUntilChanged(),
                takeUntil(this.unsubscribe$),
            )
            .subscribe(movies => {
                this.movies$ = of(movies);
                this.openModalAddMovie = false;
            });
    }

    deleteMovie(movieId: string) {
        this.movieService.deleteMovie(movieId).subscribe({
            next: () => {
                this.movies$ = this.movieService.getMovies();
            },
            error: (err) => {
                console.error(err);
            }
        });
    }
}
