import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuthRoutingModule } from './auth-routing.module';
import { LoginPageComponent, RegisterPageComponent } from './pages';

@NgModule({
  declarations: [LoginPageComponent, RegisterPageComponent],
  imports: [CommonModule, FormsModule, ReactiveFormsModule, AuthRoutingModule],
  exports: [],
  providers: [],
})
export class AuthModule {}
