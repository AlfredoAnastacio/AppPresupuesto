import { Injectable } from '@angular/core';
import { Egreso } from './egreso.model';

@Injectable({
  providedIn: 'root'
})
export class EgresoService {

  egresos:Egreso[] = [
    new Egreso('Renta Dpto', 4000),
    new Egreso('Ropa', 500)
  ];

  constructor() { }
}
