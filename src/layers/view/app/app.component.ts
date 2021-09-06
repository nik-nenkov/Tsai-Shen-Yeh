import { Component } from '@angular/core';
import { Constants } from '../../../util/constants';

@Component({
  selector: 'tsai-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = Constants.name;
}
