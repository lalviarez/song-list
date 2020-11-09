import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-artists',
  templateUrl: './artists.component.html',
  styleUrls: ['./artists.component.scss'],
})
export class ArtistsComponent implements OnInit {
  @Output() artists = new EventEmitter<string>(false);

  constructor() {}

  ngOnInit(): void {}

  selectedArtists(artists: string) {
    this.artists.emit(artists);
  }
}
