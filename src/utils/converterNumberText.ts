function convertirNumeroATexto(numero: number): string {
  const unidades: string[] = ['cero', 'uno', 'dos', 'tres', 'cuatro', 'cinco', 'seis', 'siete', 'ocho', 'nueve'];
  const decenas: string[] = ['diez', 'veinte', 'treinta', 'cuarenta', 'cincuenta', 'sesenta', 'setenta', 'ochenta', 'noventa'];
  const especiales: string[] = ['once', 'doce', 'trece', 'catorce', 'quince', 'dieciséis', 'diecisiete', 'dieciocho', 'diecinueve'];
  const centenas: string[] = ['cien', 'ciento', 'doscientos', 'trescientos', 'cuatrocientos', 'quinientos', 'seiscientos', 'setecientos', 'ochocientos', 'novecientos'];

  function convertirCentavos(centavos: number): string {
    return centavos === 0 ? '00/100' : `${centavos < 10 ? '0' + centavos : centavos}/100`;
  }

  function convertirUnidades(num: number): string {
    return unidades[num];
  }

  function convertirDecenas(num: number): string {
    if (num < 10) return convertirUnidades(num);
    if (num >= 11 && num <= 19) return especiales[num - 11];
    
    const decena = Math.floor(num / 10);
    const unidad = num % 10;
    
    if (unidad === 0) return decenas[decena - 1];
    return `${decenas[decena - 1]} y ${convertirUnidades(unidad)}`;
  }

  function convertirCentenas(num: number): string {
    const centena = Math.floor(num / 100);
    const resto = num % 100;

    if (num === 100) return 'cien';
    if (resto === 0) return centenas[centena];

    return `${centenas[centena]} ${convertirDecenas(resto)}`;
  }

  function convertirMiles(num: number): string {
    const miles = Math.floor(num / 1000);
    const resto = num % 1000;

    if (miles === 1) {
      return resto === 0 ? 'mil' : `mil ${convertirCentenas(resto)}`;
    } else {
      return resto === 0 ? `${convertirCentenas(miles)} mil` : `${convertirCentenas(miles)} mil ${convertirCentenas(resto)}`;
    }
  }

  function convertirMillones(num: number): string {
    const millones = Math.floor(num / 1000000);
    const resto = num % 1000000;

    if (millones === 1) {
      return resto === 0 ? 'un millón' : `un millón ${convertirMiles(resto)}`;
    } else {
      return resto === 0 ? `${convertirCentenas(millones)} millones` : `${convertirCentenas(millones)} millones ${convertirMiles(resto)}`;
    }
  }

  // Manejo del número completo
  const enteros = Math.floor(numero);
  const centavos = Math.round((numero - enteros) * 100);
  const textoCentavos = convertirCentavos(centavos);

  let textoEnteros: string;

  if (enteros === 0) {
    textoEnteros = 'cero';
  } else if (enteros < 100) {
    textoEnteros = convertirDecenas(enteros);
  } else if (enteros < 1000) {
    textoEnteros = convertirCentenas(enteros);
  } else if (enteros < 1000000) {
    textoEnteros = convertirMiles(enteros);
  } else {
    textoEnteros = convertirMillones(enteros);
  }

  return `Son: ${textoEnteros} pesos ${textoCentavos} m.n.`;
}

export default convertirNumeroATexto;
