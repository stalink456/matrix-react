const CELLS_WIDTH = 13;
const CELLS_HEIGHT = 13;

const getValues = () => {
  const data = Array.from(Array(CELLS_HEIGHT), () =>
    new Array(CELLS_WIDTH).fill().map(() => {
      return {
        value: Math.floor(201 * Math.random() - 100),
        show: true,
      };
    })
  );
  return data;
};

const getColor = (x) => {
  if (x >= 0) {
    return {
      r: (x * (65 - 21)) / 100 + 21,
      g: (x * (188 - 24)) / 100 + 24,
      b: (x * (156 - 32)) / 100 + 32,
    };
  }

  return {
    r: Math.abs(((-x*(191-21))/100)+21),
    g: Math.abs(((-x*(11-24))/100)+24),
    b: Math.abs(((-x*(27-32))/100)+32)
  };
};

const getBg = (value) => {
  const { r, g, b } = getColor(value);
  return { background: `rgb(${r}, ${g}, ${b})` };
};

const bgleft = getBg(100);
const bgmiddle = getBg(0);
const bgright = getBg(-100);

export { getValues, getBg, bgleft, bgmiddle, bgright };
