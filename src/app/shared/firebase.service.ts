import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { AuthenticationService } from './authentication.service';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {
user: any;
id: any;

  constructor(private http: HttpClient, private auth: AuthenticationService) { 
    this.user = this.auth.getUser()
    this.id = this.user['uid'];
  }

  addBug(selectedCritter){
    this.http
    .post(`https://animal-crossing-92e14.firebaseio.com/users/${this.id}/bugs.json`, selectedCritter)
    .subscribe(responseData=>{
    })
  }

  // removeBug(selectedCritter){
  // }

  addFish(selectedCritter){
    this.http
    .post(`https://animal-crossing-92e14.firebaseio.com/users/${this.id}/fish.json`, selectedCritter)
    .subscribe(responseData=>{
    });
  }

  fetchBugs(){
    return this.http
    .get(`https://animal-crossing-92e14.firebaseio.com/users/${this.id}/bugs.json`)
    .pipe(map(responseData => {
      const loadedBugs =[];
      for (const key in responseData) {
        if (responseData.hasOwnProperty(key)){
          loadedBugs.push({ ...responseData[key], newID: key})
        }
      }
      return loadedBugs;
    })
    )
  }

  fetchFish(){
    return this.http
    .get(`https://animal-crossing-92e14.firebaseio.com/users/${this.id}/fish.json`)
    .pipe(map(responseData => {
      const loadedFish =[];
      for (const key in responseData) {
        if (responseData.hasOwnProperty(key)){
          loadedFish.push({ ...responseData[key], newID: key})
        }
      }
      return loadedFish;
    })
    )
  }

  // addUserInfo(name, island){
  //   this.http
  //   .post(`https://animal-crossing-92e14.firebaseio.com/users/${this.id}/profile.json`, name, island)
  //   .subscribe(responseData=>{
  //   })
  // }
}
