import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  /**
   * If true show Artists component
   *
   * @memberof HomeComponent
   */
  showArtistsComponent = true;

  /**
   * If true show Albums component
   *
   * @memberof HomeComponent
   */
  showAlbumsComponent = false;

  /**
   * If true show Songs component
   *
   * @memberof HomeComponent
   */
  showSongsComponent = false;

  /**
   * Name of selected artist
   *
   * @memberof HomeComponent
   */
  artistName = '';

  /**
   * Name of selected album
   *
   * @memberof HomeComponent
   */
  albumName = '';

  constructor() {}

  ngOnInit(): void {}

  /**
   * Get artist name from Artists component
   *
   * @param {string} artistName
   * @memberof HomeComponent
   */
  getArtistName(artistName: string) {
    this.artistName = artistName;
    this.showArtistsComponent = false;
    this.showAlbumsComponent = true;
  }

  /**
   * Get album name from Albums component
   *
   * @param {string} albumName
   * @memberof HomeComponent
   */
  getAlbumName(albumName: string) {
    this.albumName = albumName;
    this.showAlbumsComponent = false;
    this.showSongsComponent = true;
  }
}
