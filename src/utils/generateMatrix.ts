export const generateMatrix = (size: number) => {
  let matrix = [];

  for (let i = 0; i < size; i++) {
    let row = [];
    for (let j = 0; j < size; j++) {
      row.push(0);
    }
    matrix.push(row);
  }

  return matrix;
};
