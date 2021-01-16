export const paginate = (itens, itensPorPagina) => {
  let pos = 0;
  let i = 0;
  let paginas = [[]];
  itens.forEach((item) => {
    paginas[pos][i] = item;
    if (paginas[pos].length === itensPorPagina) {
      paginas.push([]);
      pos++;
      i = 0;
    } else {
      i++;
    }
  });

  return paginas;
};
