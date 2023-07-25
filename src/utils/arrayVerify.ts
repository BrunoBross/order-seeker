export const arrayEstaNaLista = (arr: number[], lista: number[][]) => {
  for (let i = 0; i < lista.length; i++) {
    if (arraysSaoIguais(arr, lista[i])) {
      return true;
    }
  }
  return false;
};

export const arraysSaoIguais = (arr1: number[], arr2: number[]) => {
  if (arr1.length !== arr2.length) {
    return false;
  }
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }
  return true;
};
