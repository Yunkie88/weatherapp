import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {Http} from '@angular/http'
import 'rxjs/add/operator/map'


/**
 * Generated class for the HomePage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {
	weatherList:any
  constructor(public navCtrl: NavController, public navParams: NavParams, private http: Http) {
  	
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HomePage');
  }


 
showWeather(){
  { 
  	this.http.get("http://api.openweathermap.org/data/2.5/weather?q=Kuala%20Lumpur&APPID=8131be7e3e6b2014b3af931e011bd730")
  	.map (res => res.json())
  	.subscribe (
  		data=> {
  			this.weatherList=data;
  			console.log(this.weatherList)
  		},
  		err => {
  			console.log(err);
  		},
  		()=>{
  			console.log ('everything is done!!!')
  		}
  		);
  }
}

}
