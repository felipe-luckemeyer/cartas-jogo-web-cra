export const paginate = (itens, itensPorPagina) => {
  const lastItem = (item) => {
    if (itens[itens.length - 1] === item) return true;
    else return false;
  };

  if (itens.length === 0) return [];
  let pos = 0;
  let i = 0;
  let paginas = [[]];
  itens.forEach((item) => {
    paginas[pos][i] = item;
    if (paginas[pos].length === itensPorPagina && !lastItem(item)) {
      paginas.push([]);
      pos++;
      i = 0;
    } else {
      i++;
    }
  });

  return paginas;
};

export * from './styled-global';
