import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-artists',
  templateUrl: './artists.component.html',
  styleUrls: ['./artists.component.scss'],
})
export class ArtistsComponent implements OnInit {
  /**
   * Selected artits name from list
   *
   * @memberof ArtistsComponent
   */
  @Output() artistName = new EventEmitter<string>(false);

  constructor() {}

  ngOnInit(): void {}

  /**
   * Get selected artist name from list
   *
   * @param {string} artistName
   * @memberof ArtistsComponent
   */
  selectedArtistName(artistName: string) {
    this.artistName.emit(artistName);
  }
}
