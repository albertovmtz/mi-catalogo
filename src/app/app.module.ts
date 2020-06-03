import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';
import { ModalAddUpdateComponent } from './modal-add-update/modal-add-update.component';
import { FormsModule } from '@angular/forms';
import { Ng2SearchPipeModule } from 'ng2-search-filter';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { VistasComponent } from './vistas/vistas.component';
import { ListComponent } from './list/list.component';
import { TableComponent } from './table/table.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { DetallesAutosComponent } from './detalles-autos/detalles-autos.component';
import { ModalConfirmActionComponent } from './modal-confirm-action/modal-confirm-action.component';
import { ForbiddenNameDirective } from './directives/forbidden-name.directive';
import { FormatoModelosPipe } from './pipes/formato-modelos.pipe';





@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    VistasComponent,
    ListComponent,
    TableComponent,
    PageNotFoundComponent,
    DetallesAutosComponent,
    ModalAddUpdateComponent,
    ModalConfirmActionComponent,
    ForbiddenNameDirective,
    FormatoModelosPipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    FormsModule,
    Ng2SearchPipeModule
    
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [DetallesAutosComponent, ModalAddUpdateComponent, ModalConfirmActionComponent]
})
export class AppModule { }
