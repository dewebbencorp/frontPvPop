import MainLayout from "../../../common/layouts/MainLayout";
import useNavigationData from "../../../common/hooks/useNavigationData";
import { useEffect } from "react";
import TableReconciliation2 from "../components/TableReconciliation2";
import TableReconciliation3 from "../components/TableReconciliation3";
import useReconciliation from "../hooks/useReconciliation";
import "../../../theme/Reconciliation.css";

const Reconciliation2: React.FC = () => {
  const { changeTitle } = useNavigationData();
  const { totalDoctos, totalCash, totalDifference, totalCheckout } =
  useReconciliation();

  useEffect(() => {
    changeTitle("Cortes / Denominaciones");
  }, []);

  return (
    <>
      <MainLayout>
        <main className="bg-background max-w-full h-full flex justify-between items-start flex-col p-4">
          <section className="w-full flex items-center gap-4">
            <label className="font-semibold text-[1rem] uppercase min-w-16">
              Fecha:
            </label>
            <span className="font-semibold text-[1rem] bg-[#E5E5E5] border border-[#999] text-text rounded-lg px-4 min-w-32 h-10 justify-start items-center flex">              
              10/10/2024
            </span>
            <label className="font-semibold text-[1rem] uppercase min-w-16">
              Turno:
            </label>
            <span className="font-semibold text-[1rem] bg-[#E5E5E5] border border-[#999] text-text rounded-lg px-4 min-w-32 h-10 justify-start items-center flex">              
              3
            </span>
          </section>
          <section className="w-full flex items-start justify-center gap-4">
            <article className="w-80 shadow-general rounded-lg max-h-[22.5rem] overflow-y-scroll">
              <TableReconciliation2 />
            </article>
            <article className="grow shadow-general rounded-lg max-h-[22.5rem] overflow-y-scroll">
              <TableReconciliation3 />
            </article>
          </section>
          <section className="flex flex-row justify-between w-full">
            <div className="gap-4 flex flex-col">
              <div className="flex justify-between">
                <span className="w-28 z text-[1rem] leading-none flex items-center font-semibold uppercase">
                  Total Efectivo:
                </span>
                <span className="bg-button-primary rounded-lg w-48 px-4 py-2 text-white items-center justify-start flex">
                  $ {totalCash.toFixed(2)}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="w-28 z text-[1rem] leading-none flex items-center font-semibold uppercase">
                  Total Docto:
                </span>
                <span className="bg-button-primary rounded-lg w-48 px-4 py-2 text-white items-center justify-start flex">
                  $ {totalDoctos.toFixed(2)}
                </span>
              </div>
            </div>

            <div className="gap-4 flex flex-col">
              <div className="flex justify-between">
                <span className="w-28 z text-[1rem] leading-none flex items-center font-semibold uppercase">
                  Total Diferencia:
                </span>
                <span className="bg-button-primary rounded-lg w-48 px-4 py-2 text-white items-center justify-start flex">
                  $ {totalDifference.toFixed(2)}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="w-28 z text-[1rem] leading-none flex items-center font-semibold uppercase">
                  Total Checkout:
                </span>
                <span className="bg-button-primary rounded-lg w-48 px-4 py-2 text-white items-center justify-start flex">
                  $ {totalCheckout.toFixed(2)}
                </span>
              </div>
            </div>

            <div className="gap-4 flex flex-col">
              <div className="flex justify-between">
                <span className="w-28 z text-[1rem] leading-none flex items-center font-semibold uppercase">
                  Total Diferencia:
                </span>
                <span className="bg-button-primary rounded-lg w-48 px-4 py-2 text-white items-center justify-start flex">
                  $ {totalDifference.toFixed(2)}
                </span>
              </div>
              <div className="flex justify-between">
                <button className="bg-button-success py-2 px-4 rounded-lg w-full uppercase text-white font-bold">
                  Totalizar y guardar
                </button>
              </div>
            </div>
          </section>
        </main>
      </MainLayout>
    </>
  );
};
export default Reconciliation2;
