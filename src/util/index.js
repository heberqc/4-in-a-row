export function checkVector(vector, value) {
  return vector.every(el => el === value)
}

export function checkLine(vector, value, minLen) {
  if (vector.length >= minLen) {
    if (checkVector(vector.slice(0, minLen), value)) {
      return true;
    } else {
      return checkLine(vector.slice(1), value, minLen);
    }
  } else {
    return false;
  }
}

export function checkHorizontal(matrix, value, minLen) {
  if (matrix.length === 1) {
    return checkLine(matrix.slice(0, 1)[0], value, minLen);
  } else {
    if (checkLine(matrix.slice(0, 1)[0], value, minLen)) {
      return true;
    } else {
      return checkHorizontal(matrix.slice(1), value, minLen);
    }
  }
}

export function transpose(matrix) {
  const mat = matrix.map(row => row.slice());
  const rowLen = mat.length;
  const matLen = mat.slice(0, 1)[0].length;
  return Array(matLen).fill(null).map(
    (_, i) => Array(rowLen).fill(null).map(
      (_, j) => mat[j][i]
    )
  );
}

export function checkVertical(matrix, value, minLen) {
  const t_matrix = transpose(matrix);
  return checkHorizontal(t_matrix, value, minLen);
}

export function getMatrixDiagonal(matrix, pos_y, pos_x, max_y, max_x) {
  let step = 0;
  const res = [];
  while(pos_y + step < max_y && pos_x + step < max_x) {
    res.push(matrix[pos_y + step][pos_x + step]);
    step = step + 1;
  }
  return res;
}

export function checkDiagonal(matrix, value, minLen) {
  const rowLen = matrix.length;
  const colLen = matrix.slice(0, 1)[0].length;
  const max_row = rowLen - minLen;
  const max_col = colLen - minLen;
  // under diagonal
  for(let j = max_row; j > 0; --j) {
    if (checkLine(getMatrixDiagonal(matrix, j, 0, rowLen, colLen), value, minLen)) {
      return true;
    }
  }
  // diagonal
  if (checkLine(getMatrixDiagonal(matrix, 0, 0, rowLen, colLen), value, minLen)) {
    return true;
  }
  // over diagonal
  for(let i = max_col; i > 0; --i) {
    if (checkLine(getMatrixDiagonal(matrix, 0, i, rowLen, colLen), value, minLen)) {
      return true;
    }
  }
  return false
}
