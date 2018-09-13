import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { RouterLink,Routes, RouterModule,Router,ActivatedRoute } from '@angular/router';
import { AuthService } from '../../core/services/auth.service';
import { AuthGuard } from '../../core/services/auth.guard';
import { FormGroup, FormBuilder,Validators } from '@angular/forms';
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
  constructor(private formbuilder:FormBuilder,private auth:AuthService,private fire:AngularFireAuth ,private router: Router,private afs: AngularFirestore) { 
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
    if (this.form.valid) {
      this.login = this.auth.emailLogin(this.email, this.password);
    }else {
      this.form.controls['email'].markAsTouched();
      this.form.controls['password'].markAsTouched();
      return;
    }
    
  }    
}
