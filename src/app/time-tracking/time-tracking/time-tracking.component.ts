import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {AngularFirestore, AngularFirestoreDocument} from "@angular/fire/compat/firestore";
import {UserModel} from "../../logic/models/user.model";
import {TrackedTimeModel} from "../../logic/models/tracked-time.model";
import {TimeDateService} from "../../logic/services/time-date.service";
import {from, Observable} from 'rxjs';

@Component({
  selector: 'app-time-tracking',
  templateUrl: './time-tracking.component.html',
  styleUrls: ['./time-tracking.component.scss']
})
export class TimeTrackingComponent implements OnInit {
  public isWorking: boolean = false;
  public timeTrackedSeconds: number = 0;
  public timeTrackedDisplay: string = '00:00';
  public allTrackings: TrackedTimeModel[] = []

  private userId: string = '';
  private trackingId: any = null;

  public selectedOption = 5000

  public options = [
    { name: "TIMETRACKER-breaks-5", value: 5000 },
    { name: "TIMETRACKER-breaks-10", value: 10000 },
    { name: "TIMETRACKER-breaks-15", value: 15*60*1000 },
    { name: "TIMETRACKER-breaks-30", value: 30*60*1000 },
    { name: "TIMETRACKER-breaks-45", value: 45*60*1000 },
    { name: "TIMETRACKER-breaks-60", value: 60*60*1000 },
  ]

  constructor(public http_: HttpClient,
              public afs: AngularFirestore,
              public timeDateService: TimeDateService) {
  }

  ngOnInit(): void {
    this.userId = JSON.parse(localStorage.getItem('user')!)?.uid;

    this.getPreviousTrackings();
  }


  public startTimeTracking(taskName: string): void {
    setTimeout(() => {
      this.displayBreakNotification();
    }, this.selectedOption);



    this.isWorking = true;

    if (taskName.length < 1) {
      taskName = 'Puste zadanie';
    }

    setInterval(() => {
      if (this.isWorking) {
        this.timeTrackedSeconds += 1
        this.timeTrackedDisplay = this.formatMiliseconds(this.timeTrackedSeconds);
      }
    }, 1000);


    this.timeDateService.getDateTime$().subscribe((d) => {
      if (d) {
        this.trackingId = Date.now();
        const userRef: AngularFirestoreDocument<any> = this.afs.doc(`users/${this.userId}/tracking/${this.trackingId}`);
        const trackingData: TrackedTimeModel = {
          uid: this.userId,
          startTime: d,
          taskName: taskName
        };

        userRef.set(trackingData, {
          merge: true,
        }).then(r => {});
      }
    });

  }


  public stopTimeTracking(): void {
    this.isWorking = false;

    this.timeDateService.getDateTime$().subscribe((d) => {
      if (d) {
        const userRef: AngularFirestoreDocument<any> = this.afs.doc(`users/${this.userId}/tracking/${this.trackingId}`);
        const trackingData: TrackedTimeModel = {
          stopTime: d,
        };

        userRef.update(trackingData).then(r => {
          this.getPreviousTrackings();
        });
      }
    });

    this.isWorking = false;
    this.timeTrackedDisplay = '00:00';
    this.timeTrackedSeconds = 0;

    setTimeout(() => {
      window.location.reload();
    }, 500);
  }

  public onBreakTimeValueChange(e: any) {
    this.selectedOption = (e.options[e.selectedIndex].value);
  }

  public formatMiliseconds(ms: number): string {
    if (ms < 3600) {
      return new Date(ms * 1000).toISOString().substr(14, 5)
    } else {
      return new Date(ms * 1000).toISOString().substr(11, 8)
    }
  }

  public getPreviousTrackings() {
    const trackingsCollectionRef = this.afs.firestore.collection(`users/${this.userId}/tracking/`);

    trackingsCollectionRef.get().then((querySnapshot) => {
      this.allTrackings = [];
      querySnapshot.forEach((doc) => {
        const obj = this.mapTrackingToProperTime(doc?.data());
        this.allTrackings.push(obj);
      });
    });
  }

  public mapTrackingToProperTime(tracking: TrackedTimeModel) {
    return {
      uid: tracking?.uid,
      startTime: new Date(tracking?.startTime).getTime(),
      stopTime: new Date(tracking?.stopTime).getTime(),
      taskName: tracking?.taskName,
      duration: (new Date(tracking?.stopTime).getTime() - new Date(tracking?.startTime).getTime()) / 1000 % 60,
    }
  }

  public displayBreakNotification() {

    if(! ('Notification' in window) ){
      console.log('Web Notification not supported');
      return;
    }

    Notification.requestPermission(function(permission){
      var notification = new Notification("Czas na przerwę",{body:'czas na KitKat', dir:'auto'});

    });


  }

}
