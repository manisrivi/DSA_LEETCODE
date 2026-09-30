/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function(intervals) {
    intervals.sort((a, b) => a[0] - b[0]);

    const result = [];

    for (let i=0; i<intervals.length; i++) {
        const current = intervals[i];

        if (result.length === 0) {
            result.push(current);
            continue;
        }

        const previous = result[result.length -1];

        if (current[0] <= previous[1]) {
            previous[1] = Math.max(previous[1], current[1]);
        } else {
            result.push(current);
        }

    }

    return result;
};