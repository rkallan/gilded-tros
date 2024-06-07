import { defaultDays } from "./const/index.js";

const getDays = () => {
    const processArgv = process.argv.slice(2);

    const [_, daysAsString] = processArgv.find((value) => value.includes("days"))?.split("=") || [];

    const days = Number(daysAsString) || defaultDays;

    return days;
};

const getArrayWithDaysAsLength = () => {
    const days = getDays();
    const arrayLength = days + 1;
    const arrayWithDaysLength = Array.from(Array(arrayLength));

    return arrayWithDaysLength;
};

export { getDays, getArrayWithDaysAsLength };
