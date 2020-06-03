import { Component, OnInit } from '@angular/core';
import { Automovil } from '../models';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-modal-add-update',
  templateUrl: './modal-add-update.component.html',
  styleUrls: ['./modal-add-update.component.css']
})
export class ModalAddUpdateComponent{

  accion: string;
  auto: Automovil = {} as Automovil;
  selectedMin: any;
  selectedMax: any;
  constructor( public activeModal: NgbActiveModal) {
    
  }

setMin(value){
    this.selectedMin = value;
    console.log(this.selectedMin);
    return this.selectedMin;
} 
setMax(value){
  this.selectedMax = value;
  console.log(this.selectedMax);
  return this.selectedMax;
}

  ngOnInit() { 
   }
  
  onSubmit(){
    this.activeModal.close(this.auto);
  }
  
  /* arreglo(){
    const range = (start, stop, step) => Array.from({ length: (stop - start) / step + 1}, (_, i) => start + (i * step));
    range(2, 10, 1);
  } */
}





