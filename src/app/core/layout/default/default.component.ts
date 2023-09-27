import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-default',
  templateUrl: './default.component.html',
  styleUrls: ['./default.component.scss']
})
export class DefaultComponent implements OnInit {
  isPortrait = false;
  isLandscape = false;
  ngOnInit() {
 
    const mediaQueryPortrait = window.matchMedia('(orientation: portrait)');
    const mediaQueryLandscape = window.matchMedia('(orientation: landscape)');

    this.isPortrait = mediaQueryPortrait.matches;
    this.isLandscape = mediaQueryLandscape.matches;

    mediaQueryPortrait.addEventListener('change', (e) => {
      this.isPortrait = e.matches;
    });

    mediaQueryLandscape.addEventListener('change', (e) => {
      this.isLandscape = e.matches;
    });
  }
}
