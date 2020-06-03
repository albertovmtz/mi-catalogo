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
  page: number;
  pageSize: number;
  displayProgressBar: boolean;

  ngOnInit(): void {
    this.displayProgressBar = true;
    this.autosService.getAutos().subscribe((response) =>{
      setTimeout(()=> {
        this.autos = response.data;
        this.displayProgressBar = false;
      },100)
      
    })
    this.pageSize = 10;
    this.page=+sessionStorage.getItem('currentPage');
    
  }

  onSelect(auto: Automovil){
    this.autoSeleccionado = auto;

  }
  open(auto: Automovil) {
    const modalRef = this.modalService.open(DetallesAutosComponent, { centered: true });
    modalRef.componentInstance.autoSeleccionado = auto;
  }

  
}
