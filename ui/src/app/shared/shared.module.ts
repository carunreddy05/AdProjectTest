import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StarComponent } from '../components/star/star.component';
import { FormsModule } from '@angular/forms';
import { UsersService } from './services/usersvc/users.service';
import { HeaderComponent } from './layout/header/header.component';
import { FooterComponent } from './layout/footer/footer.component';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  declarations: [
    StarComponent,
    HeaderComponent,
    FooterComponent
  ],
  exports: [
    StarComponent,
    CommonModule,
    FormsModule,
    RouterModule
  ]
})
export class SharedModule { }
