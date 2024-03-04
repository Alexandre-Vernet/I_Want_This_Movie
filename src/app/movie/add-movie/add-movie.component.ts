import { Component, EventEmitter, Input, OnDestroy, OnInit, Output, ViewChild } from '@angular/core';
import { MovieService } from "../movie.service";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { Movie, Status } from "../Movie";
import { IonModal } from "@ionic/angular";
import { BehaviorSubject, distinctUntilChanged, filter, Subject, switchMap, takeUntil } from "rxjs";

@Component({
    selector: 'app-add-movie',
    templateUrl: './add-movie.component.html',
    styleUrls: ['./add-movie.component.scss'],
})
export class AddMovieComponent implements OnInit, OnDestroy {

    @ViewChild(IonModal) modal: IonModal;
    @Input() isModalOpen = false;
    @Output() addNewMovie: EventEmitter<boolean> = new EventEmitter<boolean>();

    buttonAddMovie$: BehaviorSubject<void> = new BehaviorSubject<void>(null);
    unsubscribe$: Subject<void> = new Subject<void>;

    formAddMovie = new FormGroup({
        name: new FormControl('', [Validators.required]),
        status: new FormControl(Status.IN_PROGRESS, [Validators.required]),
    });

    constructor(
        private readonly movieService: MovieService
    ) {
    }

    ngOnInit() {
        this.buttonAddMovie$.pipe(
            distinctUntilChanged(),
            takeUntil(this.unsubscribe$),
            filter(() => this.formAddMovie.valid),
            switchMap(() => {
                const {name, status} = this.formAddMovie.value;
                const newMovie: Movie = {
                    name,
                    status,
                    creationDate: new Date(),
                }
                return this.movieService.addMovie(newMovie);
            })
        ).subscribe({
            next: () => {
                this.formAddMovie.get('name').reset();
                this.addNewMovie.emit(true);
            },
            error: (err) => {
                console.error(err);
            }
        });
    }

    ngOnDestroy() {
        this.unsubscribe$.next();
        this.unsubscribe$.complete();
    }

    cancel() {
        this.modal.dismiss(null, 'cancel');
    }
}
