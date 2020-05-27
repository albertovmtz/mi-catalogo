import { Component, Input } from '@angular/core';
import { Automovil } from '../models';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-detalles-autos',
  templateUrl: './detalles-autos.component.html',
  styleUrls: ['./detalles-autos.component.css']
})
export class DetallesAutosComponent {

  constructor(public activeModal: NgbActiveModal) { }
  autoSeleccionado: Automovil;


}
