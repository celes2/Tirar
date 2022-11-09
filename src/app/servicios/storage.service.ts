import { Injectable } from '@angular/core';
import {getStorage, ref, uploadString, getDownloadURL} from 'firebase/storage'

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor() { }

  storage_productos = getStorage();
  urlImagen:string = "";

  subirArchivos(nombre:string,imagen:any){
    let referenciaImagen = ref(this.storage_productos,'productos/'+nombre)
    uploadString(referenciaImagen,imagen).then(
      resultado => {
        getDownloadURL(referenciaImagen).then(
          url => {this.urlImagen = url
          console.log(this.urlImagen)}
        )
        .catch(err=>alert("Hola"))
      }
    )
    .catch(
      err=>alert("ocurrió un error:\n"+err)
    )
  }

}