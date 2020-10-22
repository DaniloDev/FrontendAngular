import { Router, ActivatedRoute } from "@angular/router";
import { UserService } from "../user.service";
import { User } from "../user.model";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-user-favorite",
  templateUrl: "./user-favorite.component.html",
  styleUrls: ["./user-favorite.component.css"],
})
export class UserFavoriteComponent implements OnInit {
  user: User;

  constructor(
    private userService: UserService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
   
  }

}
