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
   * Name of artists
   *
   * @memberof HomeComponent
   */
  artistsName = '';

  constructor() {}

  ngOnInit(): void {}

  /**
   * Get Artists name from artists component
   *
   * @param {string} artistsName
   * @memberof HomeComponent
   */
  getArtistsName(artistsName: string) {
    this.artistsName = artistsName;
    this.showArtistsComponent = false;
    this.showAlbumsComponent = true;
  }
}
