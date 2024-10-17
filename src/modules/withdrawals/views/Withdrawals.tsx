import MainLayout from "../../../common/layouts/MainLayout";
import useNavigationData from "../../../common/hooks/useNavigationData";
import { useEffect } from "react";
import TableCashDenominations from "../components/TableCashDenominations";
import TableDoctos from "../components/TableDoctos"; 
import useWithdrawals from "../hooks/useWithdrawals";
import "../../../theme/Withdrawals.css";

const Withdrawals: React.FC = () => {
  const { changeTitle } = useNavigationData();
  const {
    totalDoctos,
    totalCash,
  } = useWithdrawals();

  useEffect(() => {
    changeTitle("Retiros");
  }, []);

  return (
    <>
      <MainLayout>
        <main className="bg-background max-w-full h-full flex flex-col justify-start items-start p-4 gap-4">
          <section className="w-full flex items-center gap-4">
            <label className="font-semibold text-[1rem] uppercase min-w-16"> Fecha: </label>
            <span className="font-semibold text-[1rem] bg-[#E5E5E5] border border-[#999] text-text rounded-lg px-4 min-w-32 h-10 justify-start items-center flex shadow-general"> 10/10/2024 </span>
            <label className="font-semibold text-[1rem] uppercase min-w-16"> Turno: </label>
            <span className="font-semibold text-[1rem] bg-[#E5E5E5] border border-[#999] text-text rounded-lg px-4 min-w-32 h-10 justify-start items-center flex shadow-general"> 3 </span>
          </section>

          <section className="w-full flex items-start justify-center gap-4">
            <article className="w-72 shadow-general rounded-lg overflow-y-scroll max-h-[25rem]">
              <TableCashDenominations/>
            </article>
            <article className="grow shadow-general rounded-lg overflow-y-scroll max-h-[25rem]">
              <TableDoctos/>
            </article>
          </section>

          <section className="w-full flex flex-row flex-wrap justify-between items-end gap-4">
            <div className="flex gap-4 h-10">
              <span className="min-w-24 font-semibold text-[1rem] leading-none flex items-center"> Total Efectivo: </span>
              <span className="bg-button-primary rounded-lg w-48 px-4 py-2 text-white items-center justify-start flex shadow-general"> $ {totalCash.toFixed(2)} </span>
            </div>
            
            <div className="flex gap-4 h-10">
              <span className="min-w-24 font-semibold text-[1rem] leading-none flex items-center"> Total Docto: </span>
              <span className="bg-button-primary rounded-lg w-48 px-4 py-2 text-white items-center justify-start flex shadow-general"> $ {totalDoctos.toFixed(2)} </span>
            </div>

            <div className="flex w-64 h-10">
              <button className="bg-button-success py-2 px-4 rounded-lg w-full uppercase text-white font-bold shadow-general"> Retirar </button>
            </div>
          </section>
        </main>
      </MainLayout>
    </>
  );
};
export default Withdrawals;
