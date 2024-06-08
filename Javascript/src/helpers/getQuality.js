const getQuality = (value) => {
    const quality = Number(value) || 0;

    if (quality <= 0) return 0;

    if (quality > 50) return 50;

    return quality;
};

export default getQuality;
