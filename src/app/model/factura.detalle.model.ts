import { Factura } from "./factura.model"
import { Libro } from "./libro.model"

export interface FacturaDetalle{

idFacturaDetalle: number
cantidad: number
subtotal: number
Factura: Factura
Libro: Libro

}