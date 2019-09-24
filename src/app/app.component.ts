import { Component } from '@angular/core'

@Component({
  selector: 'app-root', //Component
  templateUrl: './app.component.html', //View
  styleUrls: ['./app.component.css'] //Styles
})

export class AppComponent {
  public title = 'Canvas';
  public description = 'Organiza facilmente tu trabajo y el de tu equipo';
}
