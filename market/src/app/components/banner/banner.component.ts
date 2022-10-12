import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss']
})
export class BannerComponent implements OnInit {

  images = [1031, 180, 316].map((n) => `https://picsum.photos/id/${n}/900/200`);

  constructor() { }

  ngOnInit(): void {
  }

}
