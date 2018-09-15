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
import { FirestorequriesComponent } from './components/firestorequries/firestorequries.component';
import { ScrollableDirective } from './scrollable.directive';
import { PaginationService } from './core/services/pagination.service';
// Loader
import { Ng4LoadingSpinnerModule } from 'ng4-loading-spinner';
import { LoadingModule } from 'ngx-loading';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
// boostrap modal
import { BootstrapModalModule } from 'ng6-bootstrap-modal';
import { ConfirmComponent } from './components/confirm/confirm.component';
import { ResetYourPasswordComponent } from './components/reset-your-password/reset-your-password.component';
 


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PageNotFoundComponent,
    BrandDetailComponent,
    LoginComponent,
    UsersComponent,
    ProfileComponent,
    FirestorequriesComponent,
    ScrollableDirective,
    ConfirmComponent,
    ResetYourPasswordComponent,        
  ],
  imports: [
    HttpModule,
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    FormsModule,
    ReactiveFormsModule,
    Ng4LoadingSpinnerModule.forRoot() ,
    LoadingModule,
    BrowserAnimationsModule, // required animations module
    ToastrModule.forRoot(), // ToastrModule added    
    BootstrapModalModule.forRoot({container:document.body}),
  ],
  //Don't forget to add the component to entryComponents section
  entryComponents: [
    ConfirmComponent
  ],
  providers: [AngularFireAuth,AuthGuard,AuthService,PaginationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
