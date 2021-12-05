import { Track } from './track';
//vvvv
export interface Album {
    name: string;
    releaseDate: string;
    coverImage: string;
    tracks: Track[];
}
