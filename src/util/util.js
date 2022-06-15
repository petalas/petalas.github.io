export const getAdjustedColor = (color, offset) => {
    if (!color) return color;
    const adjusted = Math.min(900, Math.max(50, Number.parseInt(color.split('-').pop()) + offset));
    return color.substring(0, color.lastIndexOf('-') + 1).concat(adjusted);
}