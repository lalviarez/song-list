import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import DATA from './data.json';

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
  showArtistsComponent = false;

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
   * If true show song message
   *
   * @memberof HomeComponent
   */
  showSongName = false;

  /**
   * If true show button to lists artists
   *
   * @memberof HomeComponent
   */
  showButtonFavoriteSongs = true;

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

  /**
   * Name of selected song
   *
   * @memberof HomeComponent
   */
  songName = '';

  /**
   * User Name from Login
   *
   * @memberof HomeComponent
   */
  userName = '';

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.userName = this.route.snapshot.paramMap.get('username');
  }

  /**
   * Show all Artists
   *
   * @memberof HomeComponent
   */
  myFavoriteSongs() {
    this.showButtonFavoriteSongs = false;
    this.showArtistsComponent = true;
  }

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

  /**
   * Get song name from Songs component
   *
   * @param {string} songNAme
   * @memberof HomeComponent
   */
  getSongName(songName: string) {
    this.songName = songName;
    this.showSongsComponent = false;
    this.showSongName = true;
  }

  /**
   * Build data from json
   *
   * @private
   * @memberof HomeComponent
   */
  private buildData() {
    return DATA.data;
  }

  /**
   * get Artist and albums count
   *
   * @returns
   * @memberof HomeComponent
   */
  getArtistsFromData() {
    const data = this.buildData();
    return data;
  }

  /**
   * get Artist albums
   *
   * @param {string} artitsName
   * @returns
   * @memberof HomeComponent
   */
  getAlbumsFromData(artistName: string) {
    const data = this.buildData();
    const artist = data.find((x) => x.artist === artistName);

    return artist.albums;
  }

  /**
   * get Artist album songs
   *
   * @param {string} artitsName
   * @returns
   * @memberof HomeComponent
   */
  getSongsFromData(artistName: string, albumName: string) {
    const data = this.buildData();
    const album = data
      .find((x) => x.artist === artistName)
      ?.albums?.find((x) => x.name === albumName);

    return album.songs;
  }
}
