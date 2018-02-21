import { Injectable } from '@angular/core';

@Injectable()
export class SidebarService {
  public menu:Menu[]=[
    {  
      title:"Dashboard",
      icon:"mdi mdi-gauge",
      subitems:[
        {
          title: "Home",
          url: "/dashboard"
        },
        {
          title: "Graficas",
          url: "/graficas1"
        },
        {
          title: "Progress",
          url: "/progress"
        },
        {
          title: "Settings",
          url: "/account-settings"
        },
        {
          title: "Promesas",
          url: "/promesas"
        },
        {
          title: "Rxjs",
          url: "/rxjs"
        }
      ]
    }]
  constructor() { }

}

interface Menu{
  title:string,
  icon:string,
  subitems:Submenu[]
}

interface Submenu{
  title:string,
  url:string
}