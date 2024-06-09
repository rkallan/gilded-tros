import { qualityMinMaxValue } from "../const/index.js";

const getQualityWithInMinMaxWithInMinMax = (value, minMaxValue = qualityMinMaxValue) => {
    const quality = Number(value) || 0;
    const { minValue, maxValue } = minMaxValue;

    if (quality < minValue) return minValue;

    if (quality > maxValue) return maxValue;

    return quality;
};

export default getQualityWithInMinMaxWithInMinMax;
