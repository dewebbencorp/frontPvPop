import React, { useEffect } from "react";
import SearchIcon from "../../../common/icons/SearchIcon";
import TableReturns from "../components/TableReturns";
import useNavigationData from "../../../common/hooks/useNavigationData";
import useReturns from "../hooks/useReturns";
import "../../../theme/Returns.css";
import MainLayout from "../../../common/layouts/MainLayout";
import { IonAlert } from "@ionic/react";

const Returns2: React.FC = () => {
  const { changeTitle } = useNavigationData();
  const { itemCollection, findItemById } = useReturns();

  useEffect(() => {
    changeTitle("Devoluciones");
  }, []);

  return (
    <>
      <MainLayout>
        <div className="mainContent flex justify-between flex-col gap-4">
          <div className="w-full flex justify-between items-start">
            <div className="grow max-w-min h-full flex flex-col gap-4">
              <div className="flex flex-row gap-4 items-center h-10">
                <span className="uppercase text-[1rem] w-28"> CLIENTE: </span>
                <input
                  type="text"
                  placeholder="San Benito 123"
                  className="p-2 rounded-lg bg-white text-black grow input"
                />
              </div>

              <div className="flex flex-row gap-4 items-center h-10">
                <span className="uppercase text-[1rem] w-28"> Remisión: </span>
                <div className="flex gap-4">
                  <input
                    type="text"
                    placeholder="29/10/2024"
                    className="p-2 rounded-lg bg-white text-black w-44 input"
                  />
                  <input
                    type="text"
                    placeholder="10:51 A.M."
                    className="p-2 rounded-lg bg-white text-black w-28 input"
                  />
                </div>
              </div>

              <div className="flex flex-row gap-4 items-center h-10">
                <span className="uppercase text-[1rem] w-28"> Cancelado: </span>
                <div className="flex gap-4">
                  <div className="flex gap-4 w-44">
                    <input type="checkbox" className="min-w-10 input" />
                    <input
                      type="text"
                      placeholder="29/10/2024"
                      className="p-2 rounded-lg bg-white text-black w-[7.5rem] input"
                    />
                  </div>
                  <input
                    type="text"
                    placeholder="5:21 P.M."
                    className="p-2 rounded-lg bg-white text-black w-28 max-w-36 input"
                  />
                </div>
              </div>
            </div>

            <div className="w-[372px] flex flex-col gap-2 bg-button-danger p-2 rounded-lg shadow-general">
              <div className="flex flex-row gap-2 items-center h-10 w-full">
                <span className="text-white font-bold uppercase text-[1rem] w-24">
                  Cargar Ticket:
                </span>
                <input
                  type="text"
                  placeholder="486926"
                  className="p-2 rounded-lg bg-white text-black grow input"
                />
                <button className="flex w-10 h-10 bg-button-primary rounded-lg justify-center items-center">
                  <SearchIcon />
                </button>
              </div>

              <div className="flex flex-row gap-2 items-center h-10 w-full">
                <span className="text-white font-bold uppercase text-[1rem] w-24">
                  buscar nc:
                </span>
                <input
                  type="text"
                  placeholder="53"
                  className="p-2 rounded-lg bg-white text-black grow input"
                />
                <button className="flex w-10 h-10 bg-button-primary rounded-lg justify-center items-center">
                  <SearchIcon />
                </button>
              </div>
            </div>
          </div>

          <div className="flex grow justify-between gap-2">
            <div className="w-[48rem] grow max-h-[280px] bg-blue-500 overflow-y-scroll shadow-general rounded-lg">
              <TableReturns />
            </div>
            <div className="flex flex-col items-center gap-4 w-[200px] max-w-[200px]">
              <div className="w-full flex flex-col p-2 rounded-lg gap-1 h-min bg-white items-center shadow-general">
                <div className="flex w-full justify-start gap-4 items-center">
                  <span className="text-[1rem] uppercase max-w-20 w-20">
                    Suma:
                  </span>
                  <span className="grow text-[1rem] p-2 bg-button-primary text-white rounded-[0.5rem]">
                    $ {itemCollection[0]?.summary.SUM}
                  </span>
                </div>
                <div className="flex w-full justify-start gap-4 items-center">
                  <span className="grow text-[1rem] uppercase max-w-20 w-20">
                    IEPS:
                  </span>
                  <span className="grow text-[1rem] p-2 bg-button-primary text-white rounded-[0.5rem]">
                    $ {itemCollection[0]?.summary.IEPS}
                  </span>
                </div>
                <div className="flex w-full justify-start gap-4 items-center">
                  <span className="grow text-[1rem] uppercase max-w-20 w-20">
                    IVA:
                  </span>
                  <span className="grow text-[1rem] p-2 bg-button-primary text-white rounded-[0.5rem]">
                    $ {itemCollection[0]?.summary.IVA}
                  </span>
                </div>
                <div className="flex w-full justify-start gap-4 items-center">
                  <span className="grow text-[1rem] uppercase max-w-20 w-20">
                    Subtotal:
                  </span>
                  <span className="grow text-[1rem] p-2 bg-button-primary text-white rounded-[0.5rem]">
                    $ {itemCollection[0]?.summary.subtotal}
                  </span>
                </div>
                <div className="flex w-full justify-start gap-4 items-center">
                  <span className="grow font-bold text-[1rem] uppercase max-w-20 w-20">
                    Total:
                  </span>
                  <span className="grow font-semibold text-[1rem] p-2 bg-button-primary text-white rounded-[0.5rem]">
                    $ {itemCollection[0]?.summary.total}
                  </span>
                </div>
                <button
                  className="bg-button-success uppercase rounded-lg text-white text-[1rem] font-semibold w-36 p-2 mt-1"
                  id="alert-nc"
                >
                  Guardar
                </button>
              </div>
            </div>
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
