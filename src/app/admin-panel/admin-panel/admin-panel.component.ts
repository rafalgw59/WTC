import { Component, OnInit } from '@angular/core';
import {AngularFirestore} from "@angular/fire/compat/firestore";
import {first, map} from "rxjs";


@Component({
  selector: 'app-admin-panel',
  templateUrl: './admin-panel.component.html',
  styleUrls: ['./admin-panel.component.scss']
})
export class AdminPanelComponent implements OnInit {

  public allUsersIds: any = []
  public allUsersData: any = [];

  constructor(public afs: AngularFirestore) { }

  ngOnInit(): void {
    this.getAllUsersIds().then();
  }

  async getAllUsersIds() {
    const snapshot = await this.afs.firestore.collection('users').get()
    snapshot.docs.forEach((d) => {
     this.allUsersIds.push(d.id);
     this.getUserData(d.id);
    })
  }


  public getUserData(uid: string) {
    const userDataCollectionRef = this.afs.firestore.collection(`users/${uid}/data/`);
    if (uid) {
      userDataCollectionRef.get().then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          this.allUsersData.push(doc?.data())
        });
      });
    }

  }





}
