import { useState, useEffect } from 'react';

const useReturns = () => {
    const [dataItems, setDataItems] = useState<any>([
        {
            clave: "000000069830",
            articulo: "BIOMAYAN KIIN SL CARROT 165 ML",
            cantAnt: 4,
            cantDev: 4,
            cantNvo: 0,
            precioU: 20,
            total: 80,
            nTotal: 0,
        },
        {
            clave: "000000069830",
            articulo: "SOL CERVEZA ENV 12/4",
            cantAnt: 3,
            cantDev: 1,
            cantNvo: 2,
            precioU: 50,
            total: 150,
            nTotal: 100,
        },
        {
            clave: "000000069830",
            articulo: "BIOMAYAN KIIN SL CARROT 165 ML",
            cantAnt: 4,
            cantDev: 4,
            cantNvo: 0,
            precioU: 20,
            total: 80,
            nTotal: 0,
        },
        {
            clave: "000000069830",
            articulo: "SOL CERVEZA ENV 12/4",
            cantAnt: 3,
            cantDev: 1,
            cantNvo: 2,
            precioU: 50,
            total: 150,
            nTotal: 100,
        },
        {
            clave: "000000069830",
            articulo: "SOL CERVEZA ENV 12/4",
            cantAnt: 3,
            cantDev: 1,
            cantNvo: 2,
            precioU: 50,
            total: 150,
            nTotal: 100,
        },
        {
            clave: "000000069830",
            articulo: "BIOMAYAN KIIN SL CARROT 165 ML",
            cantAnt: 4,
            cantDev: 4,
            cantNvo: 0,
            precioU: 20,
            total: 80,
            nTotal: 0,
        },
        {
            clave: "000000069830",
            articulo: "SOL CERVEZA ENV 12/4",
            cantAnt: 3,
            cantDev: 1,
            cantNvo: 2,
            precioU: 50,
            total: 150,
            nTotal: 100,
        },
        {
            clave: "000000069830",
            articulo: "SOL CERVEZA ENV 12/4",
            cantAnt: 3,
            cantDev: 1,
            cantNvo: 2,
            precioU: 50,
            total: 150,
            nTotal: 100,
        },
    ]);

    const calculateSummary = (items: any[]) => {
        const sum = items.reduce((acc: number, item: any) => acc + item.nTotal, 0);
        const ieps = sum * 0.084;  // 8.4% del total
        const iva = sum * 0.16;    // 16% del total
        const subtotal = sum;
        const total = subtotal + ieps + iva;

        return {
            SUM: sum.toFixed(2),
            IEPS: ieps.toFixed(2),
            IVA: iva.toFixed(2),
            subtotal: subtotal.toFixed(2),
            total: total.toFixed(2),
        };
    };

    const [itemCollection, setItemCollection] = useState<any>([]);

    useEffect(() => {
        const middleIndex = Math.ceil(dataItems.length / 2);
        const firstHalf = dataItems.slice(0, middleIndex);
        const secondHalf = dataItems.slice(middleIndex);

        const items = [
            {
            id: 123,
            list: firstHalf,
            summary: calculateSummary(firstHalf),
            },
            {
            id: 456,
            list: secondHalf,
            summary: calculateSummary(secondHalf),
            },
        ];

        setItemCollection(items);
    }, [dataItems]);


    const findItemById = (id: number) => {
        setItemCollection(itemCollection.find((item: any) => item.id === id));
        return itemCollection
    };

    return {
    dataItems,
    setDataItems,
    itemCollection,
    findItemById,
    setItemCollection
    };
};

export default useReturns;
