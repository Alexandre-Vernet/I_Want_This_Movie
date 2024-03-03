import { Component, Input, ViewChild } from '@angular/core';
import { MovieService } from "../movie.service";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { Movie, Status } from "../Movie";
import { IonModal } from "@ionic/angular";

@Component({
    selector: 'app-add-movie',
    templateUrl: './add-movie.component.html',
    styleUrls: ['./add-movie.component.scss'],
})
export class AddMovieComponent {

    @ViewChild(IonModal) modal: IonModal;
    @Input() isModalOpen = false;

    formAddMovie = new FormGroup({
        name: new FormControl('', [Validators.required]),
        status: new FormControl(Status.IN_PROGRESS, [Validators.required]),
    });

    constructor(
        private readonly movieService: MovieService
    ) {
    }

    cancel() {
        this.modal.dismiss(null, 'cancel');
    }

    addMovie() {
        const {name, status} = this.formAddMovie.value;
        console.log(name, status)
        const movie: Movie = {
            name,
            status,
            creationDate: new Date(),
        }
        this.movieService.addMovie(movie).subscribe();
    }
}
