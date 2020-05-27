import { Component, OnInit } from '@angular/core';
import { Automovil } from '../models';
import { NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import { DetallesAutosComponent } from '../detalles-autos/detalles-autos.component';
import { AutosService } from '../autos.service';


@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  autos: Automovil[];
  autoSeleccionado: Automovil;

  closeResult = '';
  constructor(private modalService: NgbModal, private autosService: AutosService) { }

  ngOnInit(): void {
    this.autosService.getAutos().subscribe((response) =>{
      this.autos = response.data;
    })
    
  }

  onSelect(auto: Automovil){
    this.autoSeleccionado = auto;

  }
  open(auto: Automovil) {
    const modalRef = this.modalService.open(DetallesAutosComponent, { centered: true });
    modalRef.componentInstance.autoSeleccionado = auto;
  }

  
}
