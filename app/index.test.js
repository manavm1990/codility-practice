import { expect, test } from "vitest";
import { getBinaryGap } from "./index.js";

test("binary gap of 1041 is 5", () => {
  expect(getBinaryGap(1041)).toBe(5);
});
