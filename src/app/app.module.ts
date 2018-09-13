import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { AngularFireModule } from 'angularfire2';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { environment } from './../environments/environment';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { AngularFireAuth } from 'angularfire2/auth';
import { BrandDetailComponent } from './components/brand-detail/brand-detail.component';
import { LoginComponent } from './components/login/login.component';
import { UsersComponent } from './components/users/users.component';
import { AuthGuard } from './core/services/auth.guard';
import { AuthService } from './core/services/auth.service';
import { ProfileComponent } from './components/profile/profile.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PageNotFoundComponent,
    BrandDetailComponent,
    LoginComponent,
    UsersComponent,
    ProfileComponent
  ],
  imports: [
    HttpModule,
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [AngularFireAuth,AuthGuard,AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
