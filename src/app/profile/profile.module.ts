import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { ProfileRoutingModule } from './profile-routing.module';

@NgModule({
  declarations: [],
  imports: [CommonModule, ProfileRoutingModule, SharedModule],
  exports: [],
  providers: [],
})
export class ProfileModule {}
