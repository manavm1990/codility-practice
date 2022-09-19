import { expect, test } from "vitest";
import { getBinaryGap, rotate } from "./index.js";

test("binary gap of 1041 is 5", () => {
  expect(getBinaryGap(1041)).toBe(5);
});

test("arrays are rotated", () => {
  expect(rotate([3, 8, 9, 7, 6], 3)).toEqual([9, 7, 6, 3, 8]);
  expect(rotate([0, 0, 0], 1)).toEqual([0, 0, 0]);
  expect(rotate([1, 2, 3, 4], 4)).toEqual([1, 2, 3, 4]);
});
