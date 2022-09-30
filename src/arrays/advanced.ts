/* You are given an integer array heights representing the current order 
that the students are standing in. Each heights[i] is the 
height of the ith student in line (0-indexed)
Return the number of indices where heights[i] != expected[i] */
export function heightChecker(heights: number[]): number {
  if (!heights || !heights.length) {
    return 0;
  }
  return [...heights]
    .sort((a, b) => a - b)
    .filter((elem: number, i: number) => elem !== heights[i]).length;
}

function heightChecker3(heights: number[]): number {
  let counter = 0,
    sortedHeights = [...heights].sort((a, b) => a - b);
  for (let i = 0; i < heights.length; i++) {
    if (sortedHeights[i] != heights[i]) counter++;
  }
  return counter;
}

export function heightChecker2(heights: number[]): number {
  if (!heights || !heights.length) {
    return 0;
  }
  return quicksort(heights).filter(
    (elem: number, i: number) => elem !== heights[i]
  ).length;
}

function quicksort(nums: number[]): number[] {
  if (nums.length <= 1) {
    return nums;
  }

  const pivot = nums[0];

  const left: number[] = [];
  const right: number[] = [];

  for (var i = 1; i < nums.length; i++) {
    nums[i] < pivot ? left.push(nums[i]) : right.push(nums[i]);
  }

  return quicksort(left).concat(pivot, quicksort(right));
}

export function thirdMax(nums: number[]): number {
  const dictionary = nums.reduce(
    (acc: { [key: number]: number }, elem: number) => {
      if (!acc[elem]) {
        acc[elem] = 1;
      }
      return acc;
    },
    {}
  );
  const elements = Object.keys(dictionary)
    .map((key: string) => Number(key))
    .sort((a, b) => b - a);
  return elements.length >= 3 ? elements[2] : elements[0];
}

export function thirdMax2(nums: number[]): number {
  if (!nums || !nums.length) {
    return 0;
  }
  const elements = [...new Set(nums)].sort((a, b) => b - a);
  return elements.length >= 3 ? elements[2] : elements[0];
}


export function findDisappearedNumbers(nums: number[]): number[] {
    const tracker:{[key:number] : number} = {};
    for(let i=1; i<=nums.length; i++){
        tracker[i] = 1;
    }
    for(let i=0; i<nums.length; i++){
        delete tracker[nums[i]];
    }
    return Object.keys(tracker).map((remainingElements: string) => Number(remainingElements));
};

export function sortedSquares(nums: number[]): number[] {
    const result: number [] = [];
    if(!nums.length){
        return result;
    }
    const tracker: Record<number,number> = {};
    for(let i=0; i<nums.length; i++){
        const squaredNum = nums[i]*nums[i];
        if(tracker[squaredNum]){
            tracker[squaredNum]++;
        } else {
            tracker[squaredNum]=1;
        }
    }
    Object.keys(tracker).map((elem) => {
        const keyAsNum = Number(elem);
        while(tracker[keyAsNum]>=1){
            result.push(keyAsNum);
            tracker[keyAsNum]--;
        }
    })
    return result;
};

//nums = nums.map((val) => Math.pow(val, 2)).sort((a,b) => a-b);
export function sortedSquares2(nums: number[]): number[] {
    let start = 0, end = nums.length - 1;
    const result: number[] = [];
    for(let i = nums.length - 1; i >= 0; i--)
    {
        if(Math.abs(nums[start]) < Math.abs(nums[end]))
        {
            result[i] = Math.pow(nums[end], 2);
            end--;
        }
        else
        {
            result[i] = Math.pow(nums[start], 2);
            start++
        }    
    }
    return result;
};