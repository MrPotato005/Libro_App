import { Cliente } from "./cliente.model"

export interface Factura{
idFactura: number 
numfactura: number
fecha: Date
totalNeto: number
iva: number
total: number
Cliente: Cliente
   
}