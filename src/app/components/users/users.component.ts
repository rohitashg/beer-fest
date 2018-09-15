import { Component, OnInit } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { RouterLink,Routes, RouterModule,Router } from '@angular/router';
import { PaginationService } from '././../../core/services/pagination.service';
import { Ng4LoadingSpinnerService } from 'ng4-loading-spinner';

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
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
  //template:`<img src="http://pa1.narvii.com/5722/2c617cd9674417d272084884b61e4bb7dd5f0b15_hq.gif" />`
})
export class UsersComponent implements OnInit {

  postsCol: AngularFirestoreCollection<Post>;
  posts: any;

  backgroud_image: string;
  brand_logo: string;
  brand_name:string;
  button_color:string;

  postDoc: AngularFirestoreDocument<Post>;
  post: Observable<Post>;
  
  constructor(private spinnerService: Ng4LoadingSpinnerService,private afs: AngularFirestore,public router:Router,public page: PaginationService) { }

  ngOnInit() {
    this.postsCol = this.afs.collection('users');
    //this.posts = this.postsCol.valueChanges();
    this.posts = this.postsCol.snapshotChanges()
      .map(actions => {
        return actions.map(a => {
          const data = a.payload.doc.data() as Post;
          const id = a.payload.doc.id;          
          return { id, data };
        })
      });
      this.page.init('users', 'user_name', { limit:4,reverse: true, prepend: false })       
  }

  scrollHandler(e) {    
    if (e === 'bottom') {
      this.spinnerService.show();
      this.page.more()
    }
  }

}
