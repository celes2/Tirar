import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './shared/menu/menu.component';
import { AdminComponent } from './admin/admin.component';
import { ContactoComponent } from './contacto/contacto.component';
import { ProductoComponent } from './producto/producto.component';
import { FooterComponent } from './shared/footer/footer.component';
import { InicioComponent } from './inicio/inicio.component';

import {MenubarModule} from 'primeng/menubar';
import { HarinasComponent } from './productos/harinas/harinas.component';
import { YerbaComponent } from './productos/yerba/yerba.component';
import { FrutosSecosComponent } from './productos/frutos-secos/frutos-secos.component';
import { ShampooComponent } from './productos/shampoo/shampoo.component';
import { LecheComponent } from './productos/leche/leche.component';
import { AceitesComponent } from './productos/aceites/aceites.component';
import { ProteinasComponent } from './productos/proteinas/proteinas.component';
import { SalesComponent } from './productos/sales/sales.component';
import { MantecasComponent } from './productos/mantecas/mantecas.component';
import { SalsasComponent } from './productos/salsas/salsas.component';

import {AngularFireModule} from '@angular/fire/compat'


//componentes
import {CardModule} from 'primeng/card';
import { environment } from 'src/environments/environment';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    AdminComponent,
    ContactoComponent,
    ProductoComponent,
    FooterComponent,
    InicioComponent,
    HarinasComponent,
    YerbaComponent,
    FrutosSecosComponent,
    ShampooComponent,
    LecheComponent,
    AceitesComponent,
    ProteinasComponent,
    SalesComponent,
    MantecasComponent,
    SalsasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MenubarModule,
    CardModule,
    AngularFireModule.initializeApp(environment.firebaseConfig)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
