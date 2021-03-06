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
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  email:string = '';
  password:string = '';
  postsCol: AngularFirestoreCollection<BImage>;
  posts: any;
  bgimage:string;
  site_logo:string;
  login:any;
  form:FormGroup;
  isValidFormSubmitted = false;
  public loading=false;
  errorMessage:any;
  constructor(private toastr: ToastrService,private dialogService:DialogService,private formbuilder:FormBuilder,private auth:AuthService,private fire:AngularFireAuth ,private router: Router,private afs: AngularFirestore) { 
    this.form = this.formbuilder.group({
        email:['',Validators.compose([Validators.required,Validators.email])],
        password:['',Validators.compose([Validators.required])]
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
    this.loading = true;
    if (this.form.valid) {
      this.login = this.auth.emailLogin(this.email, this.password).then((res) =>{
        this.loading = false;        
        this.router.navigate(['/users']);
      });          
    }else {
      this.form.controls['email'].markAsTouched();
      this.form.controls['password'].markAsTouched();
      return;
    }
    
  }
  showConfirm() {
    let disposable = this.dialogService.addDialog(ConfirmComponent, {
        title:'Reset Password', 
        message:"Your msg here."})
        .subscribe((isConfirmed)=>{
            //We get dialog result
            if(isConfirmed) {
                alert('accepted');
            }
            else {
                alert('declined');
            }
        });
    //We can close dialog calling disposable.unsubscribe();
    //If dialog was not closed manually close it by timeout
    setTimeout(()=>{
        disposable.unsubscribe();
    },10000);
  }    
}
