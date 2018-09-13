import { Component, OnInit } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { RouterLink,Routes, RouterModule,Router,ActivatedRoute } from '@angular/router';
import { FormGroup, FormBuilder,Validators } from '@angular/forms';
import { CustomValidators } from '../../core/custom_validator/custom_form_validator';

interface Post {
  backgroud_image: string;
  brand_logo: string;
  brand_name:string;
  button_color:string;
}
interface PostId extends Post {
  id: string;
}


@Component({
  selector: 'app-brand-detail',
  templateUrl: './brand-detail.component.html',
  styleUrls: ['./brand-detail.component.css']
})
export class BrandDetailComponent implements OnInit {
  postsCol: AngularFirestoreCollection<Post>;
  posts: any;

  backgroud_image:string;
  brand_logo:string;
  brand_name:string;
  button_color:string;
  user_name:string;
  phone:string;
  public brandlogo;
  public buttoncolor;

  postDoc: AngularFirestoreDocument<Post>;
  post: Observable<Post>;
  postId:string;
  form:FormGroup;
  abc:any;
  isValidFormSubmitted = false;
  constructor(private formbuilder:FormBuilder,private afs: AngularFirestore,public router:Router,public activeRoute:ActivatedRoute) {
    this.postId = this.activeRoute.snapshot.paramMap.get('id');
    this.postDoc = this.afs.doc('brand-list/'+this.postId);
    this.abc = this.postDoc.valueChanges().subscribe(res => {      
      this.abc = res;
      this.brandlogo = this.abc.backgroud_image;      
      this.button_color = this.abc.button_color;      
    });

    
    this.form = this.formbuilder.group({
        user_name:['',Validators.compose([CustomValidators.validateCharacters,Validators.required,Validators.minLength(3)])],
        phone:['',Validators.compose([CustomValidators.validateNumber,Validators.required,Validators.minLength(10), Validators.maxLength(16)])]
    });    
   }

  ngOnInit() {
  }
  onSubmit(){
    if (this.form.valid) {
      this.afs.collection('users').add({ 'user_name': this.user_name,'phone':this.phone});      
      this.router.navigate(['/home/']);
    }else {
      this.form.controls['user_name'].markAsTouched();
      this.form.controls['phone'].markAsTouched();
      return;
    }    
  }
}
