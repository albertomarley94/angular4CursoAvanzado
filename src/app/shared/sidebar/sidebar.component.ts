import { Component, OnInit } from '@angular/core';
import { SidebarService } from '../../services/shared/sidebar.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.sass']
})
export class SidebarComponent implements OnInit {
  menu:any[];
  constructor(
    private sidebarSrv:SidebarService
  ) { 
    this.menu=sidebarSrv.menu;
  }

  ngOnInit() {
  }

}
