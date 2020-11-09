import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-songs',
  templateUrl: './songs.component.html',
  styleUrls: ['./songs.component.scss']
})
export class SongsComponent implements OnInit {

  /**
   * Name of selected album
   *
   * @memberof SongsComponent
   */
  @Input() albumName = '';

  constructor() { }

  ngOnInit(): void {
  }

}
