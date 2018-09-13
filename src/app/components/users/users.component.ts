import { Component, OnInit } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { RouterLink,Routes, RouterModule,Router } from '@angular/router';

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
  styleUrls: ['./users.component.css']
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
  constructor(private afs: AngularFirestore,public router:Router) { }

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
  }

}
