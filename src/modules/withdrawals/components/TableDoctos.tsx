import useWithdrawals from "../hooks/useWithdrawals";

const TableDoctos: React.FC = () => {
  const {
    dataCollection,
    availableDoctos,
    addNewRow,
    handleDoctoChange,
    handleCantidadChange,
    handleReferenciaChange,
  } = useWithdrawals();

  return (
    <>
      <table className="w-full bg-white rounded-lg shadow-lg border-collapse overflow-scroll">
        <thead className="sticky top-0 bg-myFriend-600 text-white z-10">
          <tr className="font-bold h-10 items-center">
            <th className="w-44 text-center font-semibold text-[1rem] px-2 first:rounded-tl-lg last:rounded-tr-lg whitespace-nowrap truncate">
              Docto
            </th>
            <th className="text-center w-[15%] font-semibold text-[1rem] px-2 whitespace-nowrap">
              Monto
            </th>
            <th className="text-center font-semibold text-[1rem] px-2">
              Referencia
            </th>
            <th className="text-center font-semibold text-[1rem] px-2">
              Tipo C.
            </th>
            <th className="text-center font-semibold text-[1rem] px-2">
              Importe
            </th>
          </tr>
        </thead>

        <tbody>
          {dataCollection.map((item: any, index: any) => (
            <tr
              key={index}
              className={`text-center ${
                index % 2 === 0 ? "bg-gray-100" : "bg-white"
              } ${item.cantDev === 0 ? "bg-red-100" : ""}`}
            >
              <td className="text-gray-700 px-1 h-10 min-w-32">
                <select
                  className="h-full !shadow-none w-full text-center text-[14px] bg-transparent"
                  onChange={(e) => handleDoctoChange(index, e.target.value)}
                  value={item.docto}
                >
                  <option value="" className="text-black">Seleccionar Docto</option>
                  {availableDoctos.map((docto: any, idx: any) => (
                    <option key={idx} value={docto.nombre}>
                      {docto.nombre}
                    </option>
                  ))}
                </select>
              </td>
              <td className="px-3 overflow-hidden text-ellipsis whitespace-nowrap w-[15%]">
                <input
                  className="h-full !shadow-none w-3/4 text-[14px] text-center !bg-transparent"
                  type="number"
                  value={item.monto}
                  onChange={(e) =>
                    handleCantidadChange(index, Number(e.target.value))
                  }
                />
              </td>
              <td className="text-gray-700 px-3 h-10">
                <input
                  className="h-full !shadow-none text-[14px] w-3/4 text-center !bg-transparent"
                  type="text"
                  placeholder="Notas"
                  value={item.referencia}
                  onChange={(e) =>
                    handleReferenciaChange(index, String(e.target.value))
                  }
                />
              </td>
              <td className="text-gray-700 text-[14px] px-2 h-10">
                {item.tipoCambio}
              </td>
              <td className="text-gray-700 text-[14px] px-3 h-10">
                {item.importe.toFixed(2)}
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="text-center px-4 flex bg-myFriend-700 rounded-b-lg w-full sticky bottom-0 h-10">
        <span
          className="uppercase font-bold text-white text-[14px] px-2 py-1 tracking-[1vw] w-full h-full flex items-center justify-center cursor-pointer"
          onClick={addNewRow}
        >
          Agregar Docto
        </span>
      </div>
    </>
  );
};

export default TableDoctos;
