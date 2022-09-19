export const getBinaryGap = (number) => {
  const binary = number.toString(2);
  const gaps = binary.split("1").filter((zeroGaps) => zeroGaps.length > 0);
  return gaps.length > 0 ? Math.max(...gaps.map((gap) => gap.length)) : 0;
};

export const rotate = (nums, rotations) => {
  const rotated = [...nums];
  for (let i = 0; i < rotations; i++) {
    rotated.unshift(rotated.pop());
  }

  return rotated;
};

export const getOdd1Out = (nums) => {};
