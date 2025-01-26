import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppFooterComponent, AppNavbarComponent } from './components';
import { AppLayoutComponent } from './layouts';

@NgModule({
  declarations: [AppFooterComponent, AppNavbarComponent, AppLayoutComponent],
  imports: [CommonModule, RouterModule],
  exports: [AppFooterComponent, AppNavbarComponent],
  providers: [],
})
export class SharedModule {}
