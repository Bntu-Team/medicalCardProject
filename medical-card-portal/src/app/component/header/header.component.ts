import { Component, OnInit } from '@angular/core';
import { States } from '../../constant/states.constant';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: [ './header.component.css' ]
})
export class HeaderComponent implements OnInit {

  private readonly LOG_IN = 'Log in';
  private readonly LOG_OUT = 'Log out';
  private _authenticated = false;

  get authenticated(): boolean {
    return this._authenticated;
  }

  get content(): string {
    return this.authenticated ? this.LOG_OUT : this.LOG_IN;
  }

  get link(): string {
    return this.authenticated ? States.LANDING : States.AUTH;
  }

  constructor() {
  }

  ngOnInit() {
  }

  click() {
    this._authenticated = !this._authenticated;
  }
}
