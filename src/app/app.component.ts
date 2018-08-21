import { Component } from '@angular/core';
declare var UIkit: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'pi4';

  showAlert(): void {
    UIkit.modal.alert('UIkit alert!');
  }
}
