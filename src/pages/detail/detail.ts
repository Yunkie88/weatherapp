import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';

/**
 * Generated class for the DetailPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-detail',
  templateUrl: 'detail.html',
})
export class DetailPage {
	weatherDetail={}
  constructor(public navCtrl: NavController, public navParams: NavParams,private http: Http) {
  	this.weatherDetail=navParams.get ('forecast');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DetailPage');
  }

}
