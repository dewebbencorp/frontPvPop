import React from 'react';
import { Producto } from '../../../common/hooks/useTicket';

interface ProductRowProps {
  producto: Producto;
}

const ProductRow: React.FC<ProductRowProps> = ({ producto }) => {
  return (
    <div className="flex justify-between text-xs mb-2">
      <div className="flex-1">
        <div className="font-bold text-sm">CANT: {producto.cantidad}</div>
        <div>{producto.descripcion}</div>
      </div>
      <div className="text-right flex-1">
        <div className="font-bold text-sm">PUNIT: ${producto.precio_unitario.toFixed(2)}</div>
        <div>TOT: ${producto.total.toFixed(2)}</div>
      </div>
    </div>
  );
};

export default ProductRow;
