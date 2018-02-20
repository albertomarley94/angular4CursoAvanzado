import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
declare function initPlugins();
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
})
export class LoginComponent implements OnInit {

  constructor(
    private route:Router
  ) { }

  ngOnInit() {
    initPlugins();
  }

  goHome(){
    this.route.navigate(['/']);
  }
}
