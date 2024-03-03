import { Component, Input, OnInit } from '@angular/core';
import { Movie } from "../Movie";

@Component({
    selector: 'app-movie',
    templateUrl: './list-movies.component.html',
    styleUrls: ['./list-movies.component.scss'],
})
export class ListMoviesComponent implements OnInit {

    @Input() movie: Movie;

    constructor() {
    }

    ngOnInit() {
    }

}
