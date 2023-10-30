import { Component, OnInit } from '@angular/core';
import { ScriptService } from '@app/services/script.service';
import { Router } from '@angular/router';{}
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(
    public script: ScriptService,
    public router:Router
  ) {
    this.script.load(
       // 'jquery',
       // 'selectize',
       // 'plugins',
       // 'main'

       'jquery',
       'bootstrap',
       'chosen',
       'countdown',
       'scrollbar',
       'lightbox',
       'magnific',
       'slick',
       'zoom',
       'threesixty',
       'jquery-ui',
       'mobilemenu',
       'functions'
                )
          .then(data => {
            // this.yeoman.isLoaded=true;
          })
          .catch(error => console.log(error)); 
    // setTheme('');
   }

  ngOnInit(): void {
  }

}
