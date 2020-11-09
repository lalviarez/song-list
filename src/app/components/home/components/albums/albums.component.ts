import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-albums',
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.scss']
})
export class AlbumsComponent implements OnInit {

  @Input() artistsName = '';

  constructor() { }

  ngOnInit(): void {
  }

}
