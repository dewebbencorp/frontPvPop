import React, { useEffect } from 'react';
import { IonContent, IonPage, IonInput, IonButton, IonIcon, IonCheckbox, IonAlert } from '@ionic/react';
import { search } from 'ionicons/icons';
import Navbar from '../../../common/components/Navbar';
import TableReturns from '../components/TableReturns';
import useNavigationData from '../../../common/hooks/useNavigationData';
import Header from '../../../common/layouts/Header';

const Returns: React.FC = () => {
  const { changeTitle } = useNavigationData();

  useEffect(() => {
    changeTitle('Devoluciones');
  }, []);

  return (
    <IonPage>
      <Header/>

      <IonContent fullscreen>
        <div className='mainContent flex justify-between flex-col gap-4'>
          {/* Frm */}
          <div className='flex justify-between w-full items-center'>
            <div className='flex flex-col w-[420px] gap-4'>
            
              <IonInput className='w-full text-black grow uppercase' label='Cliente' placeholder="San Benito 123"></IonInput>
              
              <div className='flex flex-row gap-0 grow'>
                <IonInput className='w-5/6 text-black grow uppercase' type="date" label='Remisión' placeholder="San Benito 123"></IonInput>
                <IonInput className='w-5/6 text-black grow' type="time" placeholder="San Benito 123"></IonInput>
              </div>

              <div className='flex'>
                <div className='h-10 items-center flex w-10'>
                  <IonCheckbox/>
                </div>
                <div className='w-[400px] flex'>
                  <IonInput className='text-black uppercase' type="date" label='Cancelado' placeholder="San Benito 123"></IonInput>
                  <IonInput className='text-black' type="time" placeholder="San Benito 123"></IonInput>
                </div>
             </div>

            </div>

            <div className='flex flex-col w-[420px] gap-2 p-2 rounded-lg bg-button-danger h-min'>
              <div className='flex w-full justify-between items-end gap-2'>
                <IonInput className='!h-8 text-white' label='Buscar Ticket' placeholder="San Benito 123"></IonInput>
                <button className='bg-button-primary min-w-10 h-10 rounded-lg'> <IonIcon className='p-0 text-white' slot="icon-only" icon={search}></IonIcon></button>
              </div>
              <div className='flex w-full justify-between items-end gap-2'>
                <IonInput className='!h-8 text-white' label='Buscar NC' placeholder="San Benito 123"></IonInput>
                <button className='bg-button-primary min-w-10 h-10 rounded-lg'> <IonIcon className='p-0 text-white' slot="icon-only" icon={search}></IonIcon></button>
              </div>
            </div>
          </div>
          {/* Frm */}

          <div className='flex grow justify-between gap-4'>
            {/* Tabla */}
            <div className='w-5/6 max-h-[280px] overflow-y-scroll shadow-[0.25rem_0.5rem_0.5rem_rgba(0,0,0,0.35)] rounded-lg'>
              <TableReturns/>
            </div>
            {/* Tabla */}
            {/* Resumen */}
            <div className='flex flex-col items-center gap-4'>
              <div className='w-[200px] flex flex-col p-2 rounded-lg gap-1 h-min bg-white items-center shadow-[0.25rem_0.5rem_0.5rem_rgba(0,0,0,0.35)]'>
                <div className='flex w-full justify-start gap-4 items-center'>
                  <span className='text-[1rem] uppercase max-w-20 w-20'> Suma: </span>
                  <span className='grow text-[1rem] p-2 bg-button-primary text-white rounded-[0.5rem]'> $ 50.00 </span>
                </div>
                <div className='flex w-full justify-start gap-4 items-center'>
                  <span className='grow text-[1rem] uppercase max-w-20 w-20'> IEPS: </span>
                  <span className='grow text-[1rem] p-2 bg-button-primary text-white rounded-[0.5rem]'> $ 50.00 </span>
                </div>
                <div className='flex w-full justify-start gap-4 items-center'>
                  <span className='grow text-[1rem] uppercase max-w-20 w-20'> IVA: </span>
                  <span className='grow text-[1rem] p-2 bg-button-primary text-white rounded-[0.5rem]'> $ 50.00 </span>
                </div>
                <div className='flex w-full justify-start gap-4 items-center'>
                  <span className='grow text-[1rem] uppercase max-w-20 w-20'> Subtotal: </span>
                  <span className='grow text-[1rem] p-2 bg-button-primary text-white rounded-[0.5rem]'> $ 50.00 </span>
                </div>
                <div className='flex w-full justify-start gap-4 items-center'>
                  <span className='grow font-bold text-[1rem] uppercase max-w-20 w-20'> Total: </span>
                  <span className='grow font-semibold text-[1rem] p-2 bg-button-primary text-white rounded-[0.5rem]'> $ 2000.00 </span>
                </div>
              </div>
                <button className='font-bold bg-button-success p-2 text-center rounded-lg w-4/6 text-white uppercase shadow-[0.125rem_0.35rem_0.5rem_rgba(0,0,0,0.35)]' id="alert-nc"> Guardar </button>
            </div>
            {/* Resumen */}
          </div>
          
        </div>
      </IonContent>
      <Navbar/>
      <IonAlert
        header="¡Nota de crédito generada!"
        trigger="alert-nc"
        buttons={[
          {
            text: 'OK',
            role: 'confirm',
            handler: () => {
              console.log('Nueva nota de crédito generada');
            },
          },
        ]}
        onDidDismiss={({ detail }) => console.log(`Dismissed with role: ${detail.role}`)}
      ></IonAlert>
    </IonPage>
  );
};

export default Returns;
