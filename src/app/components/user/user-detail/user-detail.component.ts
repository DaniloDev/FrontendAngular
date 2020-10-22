import { User } from "../user.model";
import { Router, ActivatedRoute } from "@angular/router";
import { UserService } from "../user.service";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-user-detail",
  templateUrl: "./user-detail.component.html",
  styleUrls: ["./user-detail.component.css"],
})
export class UserDetailComponent implements OnInit {
  user: User;

  constructor(
    private userService: UserService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const id = +this.route.snapshot.paramMap.get("id");
    this.userService.readById(id).subscribe((user) => {
      this.user = user;
      
    document.getElementById('iframeMap').innerHTML = 
    `<div class="holds-the-iframe"><iframe  class="mapa" frameborder="0" scrolling="no" width="560" height="315" src="https://maps.google.com/maps?q=${this.user.address.city}&loc:${this.user.address.geo.lat}+${this.user.address.geo.lng}&z=19&output=embed"></iframe></div>`
    });

  }


  static getUsersStorage(){

    let users = []

    if(localStorage.getItem('users')){

        users = JSON.parse(localStorage.getItem('users'))
  }

  return users

}
/*
static getNewID(): any{

  let usersID =  parseInt(localStorage.getItem('usersID'))

  if(!usersID > 0) usersID = 0

  usersID++

  localStorage.setItem('usersID', usersID )

  return usersID
}
*/

  saveFavorite(): void {
    window.localStorage.setItem('users', JSON.stringify(this.user))
  }
  
  readFavorite(): void {
    window.localStorage.getItem('users')
  }

  cancel(): void {
    this.router.navigate(["/users"]);
  }

}
