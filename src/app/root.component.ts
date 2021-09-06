import { Component } from '@angular/core';
import { Constants } from '../util/constants';

@Component({
  selector: 'tsai-root',
  templateUrl: './root.component.html',
  styleUrls: ['./root.component.scss']
})
export class RootComponent {
  title = Constants.name;
}
