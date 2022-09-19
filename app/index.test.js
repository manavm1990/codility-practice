import { expect, test } from "vitest";
import {
  getBinaryGap,
  getMinFrogJumps,
  getOdd1Out,
  rotate,
  getMissingNumberFromSortedNumbers,
} from "./index.js";

test("binary gap of 1041 is 5", () => {
  expect(getBinaryGap(1041)).toBe(5);
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
