import { expect, test } from "vitest";
import {
  getBinaryGap,
  getMinFrogJumps,
  getMinimalDiffFromSplitTapes,
  getMissingNumberFromSortedNumbers,
  getOdd1Out,
  getSecsForFrog2CrossRiverOnLeaves,
  rotate,
  isPermutation1Or0,
} from "./index.js";

test("calculates the binary gap", () => {
  expect(getBinaryGap(1041)).toBe(5);
  expect(getBinaryGap(15)).toBe(0);
  expect(getBinaryGap(32)).toBe(0);
  expect(getBinaryGap(5)).toBe(1);
  expect(getBinaryGap(6)).toBe(0);
});

test("arrays are rotated", () => {
  expect(rotate([3, 8, 9, 7, 6], 3)).toEqual([9, 7, 6, 3, 8]);
  expect(rotate([0, 0, 0], 1)).toEqual([0, 0, 0]);
  expect(rotate([1, 2, 3, 4], 4)).toEqual([1, 2, 3, 4]);
});

test("odd one out", () => {
  expect(getOdd1Out([9, 3, 9, 3, 9, 7, 9])).toBe(7);
});

test("frog jumps", () => {
  expect(getMinFrogJumps(10, 85, 30)).toBe(3);
});

test("missing number from sorted numbers", () => {
  expect(getMissingNumberFromSortedNumbers([2, 3, 1, 5])).toBe(4);
});

test("minimal diff from split tapes", () => {
  expect(getMinimalDiffFromSplitTapes([3, 1, 2, 4, 3])).toBe(1);
});

test("frog 2 cross river on leaves", () => {
  expect(getSecsForFrog2CrossRiverOnLeaves(5, [1, 3, 1, 4, 2, 3, 5, 4])).toBe(
    6
  );
});

test("1 for permutation, 0 if not", () => {
  expect(isPermutation1Or0([4, 1, 3, 2])).toBe(1);
  expect(isPermutation1Or0([4, 1, 3])).toBe(0);
});
