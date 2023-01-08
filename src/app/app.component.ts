import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'rapid-hcm-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'rapid-hcm';
  inlineLoading = false;
  loading = false;

  timeout?: NodeJS.Timeout | null;
  timeoutInline?: NodeJS.Timeout | null;
  loadingAll = false;

  ngOnInit(): void {
    setTimeout(() => {
      this.loadingAll = true;
    }, 2000);
  }

  setInlineLoading() {
    if(this.timeoutInline) {
      return;
    }
    this.inlineLoading = true;
    this.timeoutInline = setTimeout(() => {
      this.inlineLoading = false;
      this.timeoutInline = null;
    }, 3000); 
  }

  setLoading() {
    if(this.timeout) {
      return;
    }
    this.loading = true;
    this.timeout = setTimeout(() => {
      this.loading = false;
      this.timeout = null;
    }, 3000); 
  }
}
