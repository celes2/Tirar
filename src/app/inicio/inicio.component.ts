import { Component, OnInit } from '@angular/core';
import { StorageService } from '../servicios/storage.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

  constructor(private servicioStoage:StorageService) { }

  ngOnInit(): void {
    //this.servicioStoage.subirArchivos("imagen","https://media.istockphoto.com/id/164299645/es/foto/aceite-para-cocinar.jpg?s=612x612&w=0&k=20&c=9yman5xB_c8WVctvg_dlepPlFZfL6U1tyk0PsyZb1Ls=")
  }

}
