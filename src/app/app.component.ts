import { Component } from '@angular/core';

@Component({
  selector: 'rapid-hcm-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'rapid-hcm';
  loading = false;

  setLoading() {
    this.loading = true;
    setTimeout(() => {
      this.loading = false;
    }, 3000); 
  }
}
