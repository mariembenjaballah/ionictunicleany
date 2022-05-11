import { Component, AfterViewInit } from '@angular/core';
import * as L from 'leaflet';

@Component({
  selector: 'app-acceuil',
  templateUrl: './acceuil.page.html',
  styleUrls: ['./acceuil.page.scss'],
})
export class AcceuilPage implements AfterViewInit {
  map: L.Map;
  constructor() { }

  ngAfterViewInit(): void {
    this.initMap();
  }
   private initMap():void{
    
    this.map = new L.Map('mapid').setView([36.8065,10.1815], 5);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution:'&copy; <a href="https:// stadiamaps.com/">Stadia Maps</a>, &copy; <a href="https:// openmaptiles.org/">OpenMapTiles</a> &copy; <a href="http:// openstreetmap.org">0penStreetMap</a> contributors', maxZoom:20
    }).addTo(this.map);
}
}
