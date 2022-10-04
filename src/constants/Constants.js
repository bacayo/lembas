export const percentOfDailyNeeds = needs => {
  return needs / 100;
};

export const floorNumber = num => {
  return Math.floor(num);
};

export const fixNumber = num => {
  return (num / 100).toFixed(2);
};
