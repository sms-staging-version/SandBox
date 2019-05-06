import { Component, OnInit } from '@angular/core';
import { CognitoService } from 'src/app/services/cognito.service';
import { Location } from '@angular/common';

/**
 * this is incomplete
 */
@Component({
  selector: 'app-auth-loading',
  templateUrl: './auth-loading.component.html',
  styleUrls: ['./auth-loading.component.scss']
})
export class AuthLoadingComponent implements OnInit {

  constructor(private cognito: CognitoService, private location: Location) { }

  ngOnInit() {
    this.cognito.token$.subscribe(
      token => {
        if (token) {
          this.location.back();
        }
      }
    )
  }

}
