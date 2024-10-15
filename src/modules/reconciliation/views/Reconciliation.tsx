import MainLayout from "../../../common/layouts/MainLayout";
import useNavigationData from "../../../common/hooks/useNavigationData";
import { useEffect } from "react";
import SearchIcon from "../../../common/icons/SearchIcon";
import ClearIcon from "../../../common/icons/ClearIcon";
import TableReconciliation from "../components/TableReconciliation";
import "../../../theme/Reconciliation.css";
import { useHistory } from 'react-router-dom';

const Reconciliation: React.FC = () => {
  const { changeTitle } = useNavigationData();
  const history = useHistory();

  const handleNew = () => {
    history.push('/reconciliations2')
  }

  useEffect(() => {
    changeTitle("Cortes / Denominaciones");
  }, []);

  return (
    <>
      <MainLayout>
        <main className="bg-background max-w-full flex flex-col justify-center items-start p-4 gap-4">
          <section className="flex flex-row justify-between w-full">
            <article className="flex flex-row gap-4 items-end">
              <div className="flex flex-col gap-2">
                <label className="font-semibold text-[1rem] uppercase">
                  {" "}
                  Desde:{" "}
                </label>
                <input
                  className="rounded-lg h-10 px-2 bg-white text-black grow"
                  type="date"
                  name="FromDate"
                  id="FromDate"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label className="font-semibold text-[1rem] uppercase">
                  {" "}
                  Hasta:{" "}
                </label>
                <input
                  className="rounded-lg h-10 px-2 bg-white text-black grow"
                  type="date"
                  name="ToDate"
                  id="ToDate"
                />
              </div>
              <button className="bg-button-primary w-10 h-10 rounded-lg flex items-center justify-center shadow-[0rem_0.5rem_0.5rem_rgba(0,0,0,0.35)]">
                {" "}
                <SearchIcon />{" "}
              </button>
              <button className="bg-button-danger w-10 h-10 rounded-lg flex items-center justify-center shadow-[0rem_0.5rem_0.5rem_rgba(0,0,0,0.35)]">
                {" "}
                <ClearIcon />{" "}
              </button>
            </article>
            <article className="flex justify-center items-end">
              <button
                className="bg-button-success h-10 rounded-lg px-4 text-white font-bold text-[1rem] uppercase w-32 tracking-widest shadow-[0rem_0.5rem_0.5rem_rgba(0,0,0,0.35)]"
                onClick={handleNew}
              >
                {" "}
                Nuevo{" "}
              </button>
            </article>
          </section>
          <section className="grow w-full max-h-96">
            <article className="shadow-[0rem_0.5rem_0.5rem_rgba(0,0,0,0.35)] overflow-y-scroll rounded-lg">
              <TableReconciliation />
            </article>
          </section>
        </main>
      </MainLayout>
    </>
  );
};
export default Reconciliation;
