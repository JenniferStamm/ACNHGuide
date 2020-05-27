import { Component, OnInit } from '@angular/core';
import { NookipediaService } from 'src/app/shared/nookipedia.service';
import { HttpClient } from '@angular/common/http';
import { DatePipe, KeyValuePipe } from '@angular/common';

@Component({
  selector: 'app-current-bugs',
  templateUrl: './current-bugs.component.html',
  styleUrls: ['./current-bugs.component.scss']
})
export class CurrentBugsComponent implements OnInit {
  bugsList: any;
  currentBugs = [];
  alwaysBugs = [];

  constructor(private nookService: NookipediaService, private httpClient: HttpClient, private datePipe: DatePipe, private kvPipe: KeyValuePipe) { }

  //sets bugsList as an array of key value pairs from bugs JSON
  //catchableBugs() sets currentBugs as array of whatever bugs are avaiable this month
  ngOnInit() {
    this.httpClient.get("assets/bugs.json").subscribe(data => {
      this.bugsList = data;
      this.kvPipe.transform(this.bugsList);
      this.catchableBugs()
      console.log(this.currentBugs)
    })
  }

  //get today's date as MM/DD/YY, then split and just get month number
  today = this.datePipe.transform(Date.now(), 'shortDate');
  currentMonth = Number(this.today.split('/')[0]);

  //updates currentBugs to bugs ONLY avaiable this current month
  catchableBugs(){
    Object.keys(this.bugsList).forEach(key => {
      //if available this month & not always
      if (this.bugsList[key]['months']['northern']['array'].includes(this.currentMonth) && this.bugsList[key]['months']['northern']['text'] !== 'Year Round'){ 
        this.currentBugs.push(this.bugsList[key])
      }
      //if available all the time
      if (this.bugsList[key]['months']['northern']['text'] == 'Year Round'){ 
        this.alwaysBugs.push(this.bugsList[key])
      }
    });
  }
  

}

