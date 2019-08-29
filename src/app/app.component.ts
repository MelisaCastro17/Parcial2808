import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  item:string=' ';
  dist:string=' ';
  lun:string =' ';
  mas:string='';
    planetas:any = [
      {item: 'Mercurio'},
      {item: 'Venus'},
      {item: 'Tierra'},
      {item: 'Marte'},
      {item: 'Júpiter'},
      {item: 'Saturno'},
      {item: 'Urano'},
      {item: 'Neptuno'}
    ];
    distancia:any = [
      {dist: '51.91'},
      {dist: '51.92'},
      {dist: '51.93'},
      {dist: '51.94'},
      {dist: '51.95'},
      {dist: '51.96'},
      {dist: '51.97'},
      {dist: '51.98'}
    ];

    lunas:any = [
      {lun: 'luna1'},
      {lun: 'luna2'},
      {lun: 'luna3'},
      {lun: 'luna4'},
      {lun: 'luna5'},
      {lun: 'luna6'},
      {lun: 'luna7'},
      {lun: 'luna8'}
    ];
    masa:any = [
      {mas: 'masa1'},
      {mas: 'masa2'},
      {mas: 'masa3'},
      {mas: 'masa4'},
      {mas: 'masa5'},
      {mas: 'masa6'},
      {mas: 'masa7'},
      {mas: 'masa8'}
    ];
}
