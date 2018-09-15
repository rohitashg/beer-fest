import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent} from './components/home/home.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { BrandDetailComponent } from './components/brand-detail/brand-detail.component';
import { LoginComponent } from './components/login/login.component';
import { UsersComponent } from './components/users/users.component';
import { AuthGuard } from './core/services/auth.guard';
import { ProfileComponent } from './components/profile/profile.component';
import { FirestorequriesComponent } from './components/firestorequries/firestorequries.component';
import { ResetYourPasswordComponent } from './components/reset-your-password/reset-your-password.component';
// ResetYourPasswordComponent
const routes: Routes = [
  { path:'',redirectTo:'home',pathMatch:'full'},
  { path:'home',component:HomeComponent},      
  { path:'brand-detail/:id',component:BrandDetailComponent,},      
  { path:'login',component:LoginComponent,canActivate: [AuthGuard]},      
  { path:'users',component:UsersComponent,canActivate: [AuthGuard]},      
  { path:'profile',component:ProfileComponent,canActivate: [AuthGuard]},
  { path:'reset-your-password',component:ResetYourPasswordComponent},      
  { path:'firestore',component:FirestorequriesComponent},      
  
  { path:'**',component:PageNotFoundComponent},  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
