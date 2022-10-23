function nextGreaterElement(nums1: number[], nums2: number[]): number[] {
  const map = new Map();
  const stack: number[] = []; //monotonically decreasing => every new element which is larger than the last in the stack is the next larger element of the one(s), already in the stack
  const ans: number[] = [];

  for (let elem of nums2) {
    while (stack.length && elem > stack[stack.length - 1]) {
      map.set(stack[stack.length - 1], elem);
      stack.pop();
    }
    stack.push(elem);
  }

  for (let i = 0; i < nums1.length; i++) {
    if (map.get(nums1[i])) {
      ans[i] = map.get(nums1[i]);
    } else {
      ans[i] = -1;
    }
  }
  return ans;
}