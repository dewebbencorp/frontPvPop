import React, { useEffect } from "react";
import { IonAlert } from "@ionic/react";
import SearchIcon from "../../../common/icons/SearchIcon";
import TableReturns from "../components/TableReturns";
import useNavigationData from "../../../common/hooks/useNavigationData";
import "../../../theme/Returns.css";
import MainLayout from "../../../common/layouts/MainLayout";

const Returns2: React.FC = () => {
  const { changeTitle } = useNavigationData();

  useEffect(() => {
    changeTitle("Devoluciones");
  }, []);

  return (
    <>
      <MainLayout>
        <div className="mainContent flex justify-between flex-col gap-4">
          <div className="w-full flex justify-between items-center">
            <div className="grow max-w-min h-full flex flex-col gap-4">
              <div className="flex flex-row gap-4 items-center h-10">
                <span className="uppercase text-[1rem] w-28"> CLIENTE: </span>
                <input
                  type="text"
                  placeholder="San Benito 123"
                  className="p-2 rounded-lg bg-white text-black grow"
                />
              </div>

              <div className="flex flex-row gap-4 items-center h-10">
                <span className="uppercase text-[1rem] w-28"> Remisión: </span>
                <div className="flex gap-4">
                  <input
                    type="text"
                    placeholder="29/10/2024"
                    className="p-2 rounded-lg bg-white text-black w-44"
                  />
                  <input
                    type="text"
                    placeholder="10:51 A.M."
                    className="p-2 rounded-lg bg-white text-black w-28"
                  />
                </div>
              </div>

              <div className="flex flex-row gap-4 items-center h-10">
                <span className="uppercase text-[1rem] w-28"> Cancelado: </span>
                <div className="flex gap-4">
                  <div className="flex gap-4 w-44">
                    <input type="checkbox" className="min-w-10" />
                    <input
                      type="text"
                      placeholder="29/10/2024"
                      className="p-2 rounded-lg bg-white text-black w-[7.5rem]"
                    />
                  </div>
                  <input
                    type="text"
                    placeholder="10:51 A.M."
                    className="p-2 rounded-lg bg-white text-black w-28 max-w-36"
                  />
                </div>
              </div>
            </div>

            <div className="w-[372px] h-full flex flex-col gap-2 bg-button-danger p-2 rounded-lg">
              <div className="flex flex-row gap-2 items-center h-10 w-full">
                <span className="text-white font-bold uppercase text-[1rem] w-24">
                  {" "}
                  Cargar Ticket:{" "}
                </span>
                <input
                  type="text"
                  placeholder="10:51 A.M."
                  className="p-2 rounded-lg bg-white text-black grow"
                />
                <button className="flex w-10 h-10 bg-button-primary rounded-lg justify-center items-center">
                  <SearchIcon />
                </button>
              </div>

              <div className="flex flex-row gap-2 items-center h-10 w-full">
                <span className="text-white font-bold uppercase text-[1rem] w-24">
                  {" "}
                  buscar nc:{" "}
                </span>
                <input
                  type="text"
                  placeholder="10:51 A.M."
                  className="p-2 rounded-lg bg-white text-black grow"
                />
                <button className="flex w-10 h-10 bg-button-primary rounded-lg justify-center items-center">
                  <SearchIcon />
                </button>
              </div>

              <div className="flex flex-row gap-2 items-center h-10 w-full">
                <span className="text-white font-bold uppercase text-[1rem] min-w-24">
                  {" "}
                  fecha nc:{" "}
                </span>
                <div className="flex gap-2 grow max-w-full">
                  <input
                    type="text"
                    placeholder="29/10/2024"
                    className="p-2 rounded-lg bg-white text-black w-[122px]"
                  />
                  <input
                    type="text"
                    placeholder="10:51 A.M."
                    className="p-2 rounded-lg bg-white text-black w-[122px]"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="flex grow justify-between gap-2">
            {/* Tabla */}
            <div className='w-[48rem] grow max-h-[280px] overflow-y-scroll shadow-[0rem_0.5rem_0.5rem_rgba(0,0,0,0.35)] rounded-lg'>
              <TableReturns />
            </div>
            {/* Tabla */}
            {/* Resumen */}
            <div className='flex flex-col items-center gap-4 max-w-[200px]'>
              <div className="w-full flex flex-col p-2 rounded-lg gap-1 h-min bg-white items-center shadow-[0rem_0.5rem_0.5rem_rgba(0,0,0,0.35)]">
                <div className="flex w-full justify-start gap-4 items-center">
                  <span className="text-[1rem] uppercase max-w-20 w-20">
                    {" "}
                    Suma:{" "}
                  </span>
                  <span className="grow text-[1rem] p-2 bg-button-primary text-white rounded-[0.5rem]">
                    {" "}
                    $ 50.00{" "}
                  </span>
                </div>
                <div className="flex w-full justify-start gap-4 items-center">
                  <span className="grow text-[1rem] uppercase max-w-20 w-20">
                    {" "}
                    IEPS:{" "}
                  </span>
                  <span className="grow text-[1rem] p-2 bg-button-primary text-white rounded-[0.5rem]">
                    {" "}
                    $ 50.00{" "}
                  </span>
                </div>
                <div className="flex w-full justify-start gap-4 items-center">
                  <span className="grow text-[1rem] uppercase max-w-20 w-20">
                    {" "}
                    IVA:{" "}
                  </span>
                  <span className="grow text-[1rem] p-2 bg-button-primary text-white rounded-[0.5rem]">
                    {" "}
                    $ 50.00{" "}
                  </span>
                </div>
                <div className="flex w-full justify-start gap-4 items-center">
                  <span className="grow text-[1rem] uppercase max-w-20 w-20">
                    {" "}
                    Subtotal:{" "}
                  </span>
                  <span className="grow text-[1rem] p-2 bg-button-primary text-white rounded-[0.5rem]">
                    {" "}
                    $ 50.00{" "}
                  </span>
                </div>
                <div className="flex w-full justify-start gap-4 items-center">
                  <span className="grow font-bold text-[1rem] uppercase max-w-20 w-20">
                    {" "}
                    Total:{" "}
                  </span>
                  <span className="grow font-semibold text-[1rem] p-2 bg-button-primary text-white rounded-[0.5rem]">
                    {" "}
                    $ 2000.00{" "}
                  </span>
                </div>
              </div>
              {/* <button className='font-bold bg-button-success p-2 text-center rounded-lg w-[156px] text-white uppercase shadow-[0.125rem_0.35rem_0.5rem_rgba(0,0,0,0.35)]' id="alert-nc"> Guardar </button> */}
            </div>
            {/* Resumen */}
          </div>
        </div>
      </MainLayout>
      <IonAlert
        header="¡Nota de crédito generada!"
        trigger="alert-nc"
        buttons={[
          {
            text: "OK",
            role: "confirm",
            handler: () => {
              console.log("Nueva nota de crédito generada");
            },
          },
        ]}
        onDidDismiss={({ detail }) =>
          console.log(`Dismissed with role: ${detail.role}`)
        }
      ></IonAlert>
    </>
  );
};
export default Returns2;
