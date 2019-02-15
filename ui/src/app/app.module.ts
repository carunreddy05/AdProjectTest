import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { ProductModule } from './views/products/product.module';
import { UsersComponent } from './views/users/users.component';
import { UsersModule } from './views/users/users.module';
import { UserDetailComponent } from './components/user-detail/user-detail.component';
import { UserListComponent } from './components/user-list/user-list.component';
import { RestrictedComponent } from './views/restricted/restricted.component';
import { SharedModule } from './shared/shared.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { FormErrorDisplayComponent } from './components/form-error-display/form-error-display.component';
import { RegisterComponent } from './views/register/register.component';
import { ProductListComponent } from './views/products/product-list.component';
import { StarComponent } from './components/star/star.component';

@NgModule({
  declarations: [
    AppComponent,
    RestrictedComponent,
    UsersComponent,
    UserDetailComponent,
    UserListComponent,
    FormErrorDisplayComponent,
    RegisterComponent,

  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      { path: 'app', component: RestrictedComponent },
      { path: 'register', component: RegisterComponent },
      { path: 'users', component: UsersComponent },
      { path: 'products', component: ProductListComponent },
      { path: '', redirectTo: 'app', pathMatch: 'full' },
      { path: '**', redirectTo: 'app', pathMatch: 'full' }
    ]),
    ProductModule,
    UsersModule,
    SharedModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
