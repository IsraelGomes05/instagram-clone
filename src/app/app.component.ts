import {Component, OnInit} from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Instagram';

  ngOnInit(): void {

    const config = {
      apiKey: 'AIzaSyA_lSgQzdK30cK90kh1a-yoa-h_HfvUu_s',
      authDomain: 'jtb-instagram-clone.firebaseapp.com',
      databaseURL: 'https://jtb-instagram-clone.firebaseio.com',
      projectId: 'jtb-instagram-clone',
      storageBucket: 'jtb-instagram-clone.appspot.com',
      messagingSenderId: '108984674643'
    };
    firebase.initializeApp(config);
  }
}

