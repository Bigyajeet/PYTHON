Array.prototype.groupBy = function(fn) {
    const grouped = {};
    for (const item of this) {
        const key = fn(item);
        if (grouped.hasOwnProperty(key)) {
            grouped[key].push(item);
        } else {
            grouped[key] = [item];
        }
    }
    return grouped;
};