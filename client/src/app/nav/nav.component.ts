import { Component, NgModule, OnInit } from '@angular/core';
import { AccountService } from '../_services/account.service';
import { User } from '../_models/user';
import { Observable, of } from 'rxjs';
//import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})

export class NavComponent implements OnInit {
  model: any = {};
//currentUser$ : Observable<User | null> =of(null);
  constructor(public accountService: AccountService) { }

  ngOnInit(): void {
   //this.currentUser$=this.accountService.currentUser$;
  }

  login(): void {
    this.accountService.login(this.model).subscribe({
      next: response => {
        console.log(response);
      },
      error: error => console.error(error)
    })
  }
  logout() {
    this.accountService.logout();
  }
}
