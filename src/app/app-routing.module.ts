import { UserFavoriteComponent } from './components/user/user-favorite/user.favorite.component';
import { UserDetailComponent } from './components/user/user-detail/user-detail.component';
import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { HomeComponent } from "./views/home/home.component";
import { UserHeadComponent } from "./views/user-head/user-head.component";

const routes: Routes = [
  {
    path: "",
    component: HomeComponent
  },
  {
    path: "users",
    component: UserHeadComponent
  },
  {
    path: "users/detail/:id",
    component: UserDetailComponent
  },
  {
    path: "users/favorites",
    component: UserFavoriteComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
