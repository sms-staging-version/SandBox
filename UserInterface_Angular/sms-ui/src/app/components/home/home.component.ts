import { Component, OnInit, OnDestroy } from '@angular/core';
import { UsersClientService } from 'src/app/sms-client/clients/users-client.service';
import { CognitoService } from 'src/app/services/cognito.service';
import { Subscription } from 'rxjs';
import { User } from 'src/app/sms-client/dto/User';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {

  private currentUserSubscription: Subscription;

  private user: User;

  constructor(private userClient: UsersClientService, private cognito: CognitoService) { }

  ngOnInit() {
    this.currentUserSubscription = this.cognito.currentUser$.subscribe(user => {
      this.userClient.findByEmail(user.email).subscribe(
        succResp => {
          console.log(succResp);
          this.user = succResp;
        },
        err => {
          console.log(err);
        }
      );
    });
  }

  ngOnDestroy() {
    // ensures that we don't try calling unsubscribe on undefined
    if (this.currentUserSubscription) {
      this.currentUserSubscription.unsubscribe();
    }
  }

}
