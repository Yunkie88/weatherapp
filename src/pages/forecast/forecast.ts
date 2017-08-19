import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';
import { DetailPage } from '../detail/detail';


/**
 * Generated class for the ForecastPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-forecast',
  templateUrl: 'forecast.html',
})
export class ForecastPage {
	forecastList:any
  constructor(public navCtrl: NavController, public navParams: NavParams, private http: Http) {
  		{ 
  	this.http.get("https://api.openweathermap.org/data/2.5/forecast?id=524901&APPID=8131be7e3e6b2014b3af931e011bd730")
  	.map (res => res.json())
  	.subscribe (
  		data=> {
  			this.forecastList=data.list;
  			console.log(this.forecastList)
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

  ionViewDidLoad() {
    console.log('ionViewDidLoad ForecastPage');
  }

  buttonTapped(forecast) {
	this.navCtrl.push(DetailPage, {forecast:forecast})
}
}
