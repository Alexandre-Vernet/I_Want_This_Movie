export interface Movie {
    id?: string;
    name: string;
    status: Status;
    creationDate: Date;
}

export enum Status {
    IN_PROGRESS = 'IN PROGRESS',
    COMPLETED = 'COMPLETED',
}
