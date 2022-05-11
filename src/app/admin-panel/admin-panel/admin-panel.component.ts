import { Component, OnInit } from '@angular/core';
import {AngularFirestore} from "@angular/fire/compat/firestore";
import {first, map} from "rxjs";


@Component({
  selector: 'app-admin-panel',
  templateUrl: './admin-panel.component.html',
  styleUrls: ['./admin-panel.component.scss']
})
export class AdminPanelComponent implements OnInit {

  public allUsers: any = []

  constructor(public afs: AngularFirestore) { }

  ngOnInit(): void {
    this.getAllUsers().then();
    console.log(this.allUsers)
  }

  async getAllUsers() {
    const snapshot = await this.afs.firestore.collection('users').get()
    snapshot.docs.forEach((d) => {
     this.allUsers.push(d.id);
    })
  }




}
