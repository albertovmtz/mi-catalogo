import { Component, OnInit } from '@angular/core';
import { Automovil } from '../models';
import { AutosService } from '../autos.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  

  constructor(private autosService: AutosService) { }
  autos: Automovil[];
  autoSeleccionado: Automovil;
  pageSize: number;
  page: number;

  displayProgressBar: boolean;

  ngOnInit(): void {
    this.autosService.getAutos().subscribe((response) =>{
      this.autos = response.data;
    })
  }

  
  

}
