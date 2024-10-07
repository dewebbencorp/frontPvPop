import { IonGrid, IonRow, IonCol } from '@ionic/react';

const TableReturns: React.FC = () => {
  const data = [
    {
      clave: '000000069830',
      articulo: 'BIOMAYAN KIIN SL CARROT 165 ML',
      cantAnt: 4,
      cantDev: 4,
      cantNvo: 0,
      precioU: 20,
      total: 80,
      nTotal: 0,
    },
    {
      clave: '000000069830',
      articulo: 'SOL CERVEZA ENV 12/4',
      cantAnt: 3,
      cantDev: 1,
      cantNvo: 2,
      precioU: 50,
      total: 150,
      nTotal: 100,
    },
    {
      clave: '000000069830',
      articulo: 'BIOMAYAN KIIN SL CARROT 165 ML',
      cantAnt: 4,
      cantDev: 4,
      cantNvo: 0,
      precioU: 20,
      total: 80,
      nTotal: 0,
    },
    {
      clave: '000000069830',
      articulo: 'SOL CERVEZA ENV 12/4',
      cantAnt: 3,
      cantDev: 1,
      cantNvo: 2,
      precioU: 50,
      total: 150,
      nTotal: 100,
    },
    {
      clave: '000000069830',
      articulo: 'SOL CERVEZA ENV 12/4',
      cantAnt: 3,
      cantDev: 1,
      cantNvo: 2,
      precioU: 50,
      total: 150,
      nTotal: 100,
    },
    {
      clave: '000000069830',
      articulo: 'BIOMAYAN KIIN SL CARROT 165 ML',
      cantAnt: 4,
      cantDev: 4,
      cantNvo: 0,
      precioU: 20,
      total: 80,
      nTotal: 0,
    },
    {
      clave: '000000069830',
      articulo: 'SOL CERVEZA ENV 12/4',
      cantAnt: 3,
      cantDev: 1,
      cantNvo: 2,
      precioU: 50,
      total: 150,
      nTotal: 100,
    },
    {
      clave: '000000069830',
      articulo: 'SOL CERVEZA ENV 12/4',
      cantAnt: 3,
      cantDev: 1,
      cantNvo: 2,
      precioU: 50,
      total: 150,
      nTotal: 100,
    },
    // Agrega más datos aquí
  ];

  return (
    <IonGrid className="w-full p-0 m-0">
      <IonRow className="bg-myFriend-600 text-white font-bold h-10 items-center">
        <IonCol className='text-center min-w-32 font-semibold text-[1rem]'>CLAVE</IonCol>
        <IonCol className='text-center min-w-[20%] font-semibold text-[1rem]'>ARTÍCULO</IonCol>
        <IonCol className='text-center font-semibold text-[1rem]'>C. ANT</IonCol>
        <IonCol className='text-center font-semibold text-[1rem]'>C. DEV</IonCol>
        <IonCol className='text-center font-semibold text-[1rem]'>C. NVO</IonCol>
        <IonCol className='text-center font-semibold text-[1rem]'>PRECIO U</IonCol>
        <IonCol className='text-center font-semibold text-[1rem]'>TOTAL</IonCol>
        <IonCol className='text-center font-semibold text-[1rem]'>N TOTAL</IonCol>
      </IonRow>

      {data.map((item, index) => (
        <IonRow key={index} className="bg-white h-10">
          <IonCol className='min-w-32'>{item.clave}</IonCol>
          <IonCol className='overflow-hidden text-ellipsis whitespace-nowrap min-w-[20%]'>{item.articulo}</IonCol>
          <IonCol className='text-center'>{item.cantAnt}</IonCol>
          <IonCol className='text-center'>{item.cantDev}</IonCol>
          <IonCol className='text-center'>{item.cantNvo}</IonCol>
          <IonCol className='text-center'>{item.precioU}</IonCol>
          <IonCol className='text-center'>{item.total}</IonCol>
          <IonCol className='text-center'>{item.nTotal}</IonCol>
        </IonRow>
      ))}
    </IonGrid>
  );
};

export default TableReturns;
