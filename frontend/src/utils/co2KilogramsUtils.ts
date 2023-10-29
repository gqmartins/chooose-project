const TON = 1000;

export const getUnits = (co2Kilograms: number) => co2Kilograms >= TON ? 't'  : 'kg';

export const round = (co2Kilograms: number) => co2Kilograms >= TON ? Math.round((co2Kilograms / 1000) * 100) / 100 : Math.round(co2Kilograms);