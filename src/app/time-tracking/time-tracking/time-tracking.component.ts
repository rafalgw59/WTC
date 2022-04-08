import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-time-tracking',
  templateUrl: './time-tracking.component.html',
  styleUrls: ['./time-tracking.component.scss']
})
export class TimeTrackingComponent implements OnInit {
  public isWorking: boolean = false;
  public timeTrackedSeconds: number = 0;
  public timeTrackedDisplay: string = '00:00';
  constructor() { }

  ngOnInit(): void {
  }

  public startTimeTracking(): void {
    this.isWorking = true;

    setInterval(() => {
      if (this.isWorking) {
        this.timeTrackedSeconds += 1
        if (this.timeTrackedSeconds < 3600) {
          this.timeTrackedDisplay = new Date(this.timeTrackedSeconds * 1000).toISOString().substr(14, 5)
        } else {
          this.timeTrackedDisplay = new Date(this.timeTrackedSeconds * 1000).toISOString().substr(11, 8)
        }
      }
    }, 1000);
  }


  public stopTimeTracking(): void {
    this.isWorking = false;
  }

}
