import { HeaderService } from '../../components/template/header/header.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'

@Component({
  selector: 'app-user-head',
  templateUrl: './user-head.component.html',
  styleUrls: ['./user-head.component.css']
})
export class UserHeadComponent implements OnInit {

  constructor(private router: Router, private headerService: HeaderService) {
    headerService.headerData = {
      title: 'Lista de Usuários',
      icon: 'account_circle',
      routeUrl: '/users'
    }
  }

  ngOnInit(): void {
  }

}
