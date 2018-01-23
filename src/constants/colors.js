import chromatism from "chromatism"
import arrayOfLength from "../helpers/array-of-length"

export const color = "#be0f09"

const randomHexColorCode = () => {
  let n = ((Math.random() * 0xfffff) | 0).toString(16);
  return '#' + (n.length !== 6 ? ((Math.random() * 0xf) | 0).toString(16) + n : n);
};

const degrees = 10

const sections = 90

export const defaultColors = arrayOfLength(20).map(item => randomHexColorCode())

export const blandColors = ["#000000", "#4A4A4A", "#9B9B9B", "#FFFFFF",]

export const list = chromatism.adjacent(degrees, sections, color).hex

export const colors = Array.from(new Set(Object.assign([], list, defaultColors, blandColors)))

export const SHADE = -60
