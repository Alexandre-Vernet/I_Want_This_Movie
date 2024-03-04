import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { environment } from "../../environments/environment";
import { Observable } from "rxjs";
import { Movie } from "./Movie";

@Injectable({
    providedIn: 'root'
})
export class MovieService {

    movieUrl = environment.movieUrl();

    constructor(
        private readonly http: HttpClient
    ) {
    }

    getMovies(): Observable<Movie[]> {
        return this.http.get<Movie[]>(this.movieUrl);
    }

    addMovie(movie: Movie): Observable<Movie> {
        return this.http.post<Movie>(this.movieUrl, movie);
    }

    deleteMovie(movieId: string): Observable<Movie> {
        return this.http.delete<Movie>(`${this.movieUrl}/${movieId}`);
    }
}
