var getAverages = function (nums, k) {
    if (k === 0) {
        return nums;
    }

    const windowSize = 2 * k + 1
    const length = nums.length;
    const averages = new Array(length).fill(-1);

    if (windowSize > length) {
        return averages;
    }


    const prefix = [nums[0]];
    for (let i = 1; i < length; i++) {
        prefix[i] = prefix[i - 1] + nums[i];
    }

    for (let i = k; i < (length - k); i++) {
        const left = i - k, right = i + k;
        if (i === k) {
            averages[i] = Math.floor(prefix[right] / windowSize);
        } else {
            const radius = prefix[right] - prefix[left-1];
            const average = Math.floor(radius / windowSize);
            averages[i] = average;
        }

    }

    return averages;
};


