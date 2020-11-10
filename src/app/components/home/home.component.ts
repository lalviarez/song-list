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
    const buildData = [] as any;

    DATA.songs.forEach((d) => {
      const artist = buildData.find((x) => x.name === d.artist);
      if (artist) {
        const album = artist.albums.find((x) => x.name === d.title);
        if (album) {
          album.songs.push(d.year);
        } else {
          artist.albums.push({
            name: d.title,
            songs: [d.year],
          });
        }
      } else {
        buildData.push({
          name: d.artist,
          albums: [
            {
              name: d.title,
              songs: [d.year],
            },
          ],
        });
      }
    });

    return buildData;
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
}
