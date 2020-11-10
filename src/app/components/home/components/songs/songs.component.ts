import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-songs',
  templateUrl: './songs.component.html',
  styleUrls: ['./songs.component.scss'],
})
export class SongsComponent implements OnInit {
  /**
   * Selected song name from list
   *
   * @memberof SongsComponent
   */
  @Output() songName = new EventEmitter<string>(false);

  /**
   * Name of selected album
   *
   * @memberof SongsComponent
   */
  @Input() albumName = '';

  /**
   * Data for songs of album
   *
   * @type {*}
   * @memberof SongsComponent
   */
  @Input() data: any;

  constructor() {}

  ngOnInit(): void {}

  /**
   * Get selected song name from list
   *
   * @param {string} songName
   * @memberof SongsComponent
   */
  selectedSongName(songName: string) {
    this.songName.emit(songName);
  }
}
