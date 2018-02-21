import { Component, OnInit } from '@angular/core';
import { Router, ActivationEnd } from '@angular/router';
import { Title , Meta , MetaDefinition} from '@angular/platform-browser';
@Component({
  selector: 'app-breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
  styleUrls: ['./breadcrumbs.component.sass']
})
export class BreadcrumbsComponent implements OnInit {
  title:string="";
  constructor(
    private router:Router,
    private titleService:Title,
    private metaService: Meta
  ) { 
    router.events
      .filter(evento=>evento instanceof ActivationEnd)
      .filter((evento:ActivationEnd)=>evento.snapshot.data.title)
      .subscribe((data:ActivationEnd)=>{
        this.title = data.snapshot.data.title;
        titleService.setTitle(this.title );
        let metaTag:MetaDefinition={
          name: "description",
          content: this.title
        };
        metaService.updateTag(metaTag)
      })
  }

  ngOnInit() {
  }

}
