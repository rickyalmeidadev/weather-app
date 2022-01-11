export const toDegree = (number: number) => {
  const degree = `${Math.round(number)}°`;
  return degree;
};

export const toPercentage = (number: number) => {
  const percentage = `${Math.round(number)}%`;
  return percentage;
};

export const toMeterPerSecond = (number: number) => {
  const meterPerSecond = `${Math.round(number)} m/s`;
  return meterPerSecond;
};

export const toHectoPascal = (number: number) => {
  const hectoPascal = `${Math.round(number)} hPa`;
  return hectoPascal;
};
