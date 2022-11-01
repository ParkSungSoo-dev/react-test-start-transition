export const getRandomColor = () => {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`
};

export const getRandomColorList = (count: number): string[] => {
  return new Array(count).fill(0).reduce((result) => {
    result.push(getRandomColor());
    return result;
  }, [] as string[]);
}