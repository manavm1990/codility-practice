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

export const getOdd1Out = (nums) => {
  const tally = nums.reduce((acc, num) => {
    acc[num] = acc[num] ? acc[num] + 1 : 1;
    return acc;
  }, {});

  return Number(Object.entries(tally).find(([_, value]) => value === 1)[0]);
};

export const getMinFrogJumps = (start, end, jumpDistance) =>
  Math.ceil((end - start) / jumpDistance);

export const getMissingNumberFromSortedNumbers = (nums) => {
  const numPastMissing1 = nums
    .sort((a, b) => a - b)
    .findLast((num, i, input) => num - input[i - 1] !== 1);

  return numPastMissing1 - 1;
};

export const getMinimalDiffFromSplitTapes = (nums) => {
  const splits = nums.reduce((acc, num, i) => {
    // Skip index 0
    if (i === 0) return acc;

    const [left, right] = [nums.slice(0, i), nums.slice(i)];
    const [leftSum, rightSum] = [
      left.reduce((a, b) => a + b),
      right.reduce((a, b) => a + b),
    ];
    const diff = Math.abs(leftSum - rightSum);
    return [...acc, diff];
  }, []);

  return Math.min(...splits);
};

export const getSecsForFrog2CrossRiverOnLeaves = (dist2Cross, leaves) => {
  const path = Array.from({ length: dist2Cross });
  let sec = 0;

  // Run this stuff until the path is filled with truthy values
  while (path.some((p) => !p)) {
    const currLeaf = leaves[sec];

    path[currLeaf - 1] = true;

    sec++;
  }

  // sec will be 1 past b/c we incremented it before exiting the loop
  return sec - 1;
};

export const isPermutation1Or0 = (nums) =>
  nums.sort((a, b) => a - b).every((num, i) => num === i + 1) ? 1 : 0;
