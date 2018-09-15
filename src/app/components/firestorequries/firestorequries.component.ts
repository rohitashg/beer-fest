import { Component, OnInit } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import 'rxjs/add/operator/map';
import 'rxjs/Rx';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
@Component({
  selector: 'app-firestorequries',
  templateUrl: './firestorequries.component.html',
  styleUrls: ['./firestorequries.component.css']
})
export class FirestorequriesComponent implements OnInit {
  query: any;
  
  public first;
  Expense:AngularFirestoreDocument;
  constructor(private db: AngularFirestore) { 
    /*var citiesRef = db.collection("cities");

    citiesRef.doc("SF").set({
      name: "San Francisco", state: "CA", country: "USA",
      capital: false, population: 860000,
      regions: ["west_coast", "norcal"] });
  citiesRef.doc("LA").set({
      name: "Los Angeles", state: "CA", country: "USA",
      capital: false, population: 3900000,
      regions: ["west_coast", "socal"] });
  citiesRef.doc("DC").set({
      name: "Washington, D.C.", state: null, country: "USA",
      capital: true, population: 680000,
      regions: ["east_coast"] });
  citiesRef.doc("TOK").set({
      name: "Tokyo", state: null, country: "Japan",
      capital: true, population: 9000000,
      regions: ["kanto", "honshu"] });
  citiesRef.doc("BJ").set({
      name: "Beijing", state: null, country: "China",
      capital: true, population: 21500000,
      regions: ["jingjinji", "hebei"] });  */

    // this is example of run multiple quries    
      /*this.query = this.db.collection('/cities', ref => ref
      .where("state", "==","CA").where("state", "<=", "IN")
      .where("population", ">", 1000000)
      .orderBy("population")
      .startAt(1000000)
      );   */ 

      // example
      /*this.query = this.db.collection('/cities', ref => ref
            .where("state", "==","CA")
            );   
        this.query = this.query.valueChanges().subscribe(res => {      
          this.query = res;
          console.log(this.query);           */


      // example
      /*this.first = this.db.collection("/cities",ref=>ref.orderBy("population").limit(2));
      return this.first.get().then(function (documentSnapshots) {
        // Get the last visible document
        var lastVisible = documentSnapshots.docs[documentSnapshots.docs.length-1];
        console.log("last", lastVisible);
      
        // Construct a new query starting at this document,
        // get the next 25 cities.
        var next = this.db.collection("cities")
                .orderBy("population")
                .startAfter(lastVisible)
                .limit(25);
      });  */  

  }
  

  ngOnInit() {
  }

}
