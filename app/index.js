export const getBinaryGap = (number) => {
  const binary = number.toString(2);
  const gaps = binary.split("1").filter((zeroGaps) => zeroGaps.length > 0);
  return gaps.length > 0 ? Math.max(...gaps.map((gap) => gap.length)) : 0;
};
