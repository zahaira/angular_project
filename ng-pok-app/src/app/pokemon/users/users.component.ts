import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styles: [
  ]
})
export class UsersComponent implements OnInit {
  userData: any;
  constructor(
  private userService: UserService
){}

ngOnInit(): void {
  this.getUser()
}

public getUser(){
  this.userService.getUserData().subscribe(result=>{
    this.userData = result;
    console.log(result);
  })
}



}
