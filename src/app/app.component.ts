import { Component } from '@angular/core';
import { ScriptService } from './services/script.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angeleshadows';
  constructor(
    public script: ScriptService
  )
  {
    this.script.load(
       'jquery',
       'selectize',
       'plugins',
       'main'
      // 'jquery',
      // 'bootstrap',
      // 'chosen',
      // 'countdown',
      // 'scrollbar',
      // 'lightbox',
      // 'magnific',
      // 'slick',
      // 'zoom',
      // 'threesixty',
      // 'jquery-ui',
      // 'mobilemenu',
      // 'functions'
                )
          .then(data => {
            // this.yeoman.isLoaded=true;
          })
          .catch(error => console.log(error)); 
    // setTheme('');
  }
}
