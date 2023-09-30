import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { PrimeNGConfig } from 'primeng/api';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = '';
  lang: string = 'es';
  subscription: Subscription;
  constructor(
    private primengConfig: PrimeNGConfig,
    private router: Router,
    private translateService: TranslateService,
    public translate: TranslateService
  ) {
    translate.addLangs(['es']);
    translate.setDefaultLang('es');

    const browserLang = translate.getBrowserLang();
    let lang = browserLang?.match(/es/) ? browserLang : 'es';
    this.changeLang(lang);

    this.subscription = this.translate
      .stream('primeng')
      .subscribe((data: any) => {
        this.primengConfig.setTranslation(data);
      });
  }

  ngOnInit() {

    this.primengConfig.ripple = true;
    this.translateService.setDefaultLang('es');
  }


  changeLang(lang: string) {
    this.translate.use(lang);
  }

  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

  navigate(path: string) {
    this.router.navigateByUrl(path);
  }
}
