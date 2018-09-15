import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { RouterLink,Routes, RouterModule,Router,ActivatedRoute } from '@angular/router';
import { AuthService } from '../../core/services/auth.service';
import { AuthGuard } from '../../core/services/auth.guard';
import { FormGroup, FormBuilder,Validators } from '@angular/forms';
import { ConfirmComponent } from './../../components/confirm/confirm.component';
import { DialogService } from "ng6-bootstrap-modal";
import { ToastrService } from 'ngx-toastr';
interface BImage {
  backgroud_image: string;  
}

@Component({
  selector: 'app-reset-your-password',
  templateUrl: './reset-your-password.component.html',
  styleUrls: ['./reset-your-password.component.css']
})
export class ResetYourPasswordComponent implements OnInit {

  email:string = '';  
  postsCol: AngularFirestoreCollection<BImage>;
  posts: any;
  bgimage:string;
  site_logo:string;
  login:any;
  form:FormGroup;
  isValidFormSubmitted = false;
  public loading=false;
  constructor(private toastr: ToastrService,private dialogService:DialogService,private formbuilder:FormBuilder,private auth:AuthService,private fire:AngularFireAuth ,private router: Router,private afs: AngularFirestore) { 
    this.form = this.formbuilder.group({
        email:['',Validators.compose([Validators.required,Validators.email])]
    });
  }

  ngOnInit() {
    this.postsCol = this.afs.collection('common-background-image');
    this.posts = this.postsCol.valueChanges().subscribe(res => {
      // this.backgroud_image = res[0].backgroud_image;
      this.posts = res[0];
      this.bgimage = this.posts.background_image;      
      this.site_logo = this.posts.site_logo;      
    });
  }
  onSubmit(){
    if(this.email !=''){      
      this.isValidFormSubmitted = true;
      if (this.form.valid) {
          this.login = this.auth.resetPassword(this.email).then((res) =>{          
          this.toastr.success('Password reset link has been sent your email id. Please reset your link','Success',{
            timeOut:3000
          });
          this.router.navigate(['/login']);
        });
      }
    }else{
      this.form.controls['email'].markAsTouched();      
      return;
    }
  }  
 
}
