import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-albums',
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.scss']
})
export class AlbumsComponent implements OnInit {

  /**
   * Selected album name from lists
   *
   * @memberof AlbumsComponent
   */
  @Output() albumName = new EventEmitter<string>(false);

  /**
   * Name of selected artist
   *
   * @memberof AlbumsComponent
   */
  @Input() artistName = '';

  /**
   * Data for artist albums
   *
   * @type {*}
   * @memberof AlbumsComponent
   */
  @Input() data: any;

  /**
   * Set for go to step
   *
   * @memberof AlbumsComponent
   */
  @Output() goStep = new EventEmitter<number>(false);

  constructor() { }

  ngOnInit(): void {
  }

  /**
   * Get selected album name from list
   *
   * @param {string} albumName
   * @memberof AlbumsComponent
   */
  selectedAlbumName(albumName: string) {
    this.albumName.emit(albumName);
  }

}
