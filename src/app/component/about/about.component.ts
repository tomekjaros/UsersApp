import {Component, OnDestroy, OnInit} from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit, OnDestroy {

  public word = 'janek';
  constructor() { }

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
  }
  }
