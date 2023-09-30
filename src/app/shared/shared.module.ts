import { NgModule } from '@angular/core';
import { PrimeNgModule } from './prime-ng/prime-ng.module';
import { CommonModule } from '@angular/common';
import { PagesSharedModule } from './pages-shared/pages-shared.module';

@NgModule({
  exports: [PrimeNgModule, CommonModule, PagesSharedModule],

})
export class SharedModule { }
