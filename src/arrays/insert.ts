/**
 Do not return anything, modify arr in-place instead.
     for(let i=0; i < arr.length-1; i++){
        if(arr[i]===0){
            arr = [...arr.slice(0, i+1), 0, ...arr.slice(i+1, arr.length-1)];
            i++;
        }
    }
 */
    function duplicateZeros(arr: number[]): void {
        for(let i=0; i < arr.length-1; i++){
            if(arr[i]===0){
                const remainingElements = arr.slice(i+1, arr.length);
                arr[i+1]=0;
                if(i+2 < arr.length){
                    let remainingElementsCounter = 0;
                    for(let j=i+2; j < arr.length; j++){
                        arr[j]=remainingElements[remainingElementsCounter];
                        remainingElementsCounter++;
                    }
                }
                i++;
            }
        }
    };

    function removeDuplicates(nums: number[]): number {
        let previousElement;
        let size = 0;
        for(let i=0; i<nums.length; i++){
            if(i===0){
                previousElement=nums[0];
                size++;
                continue;
            }
            if(nums[i]===previousElement || nums[i]<previousElement){
                let nextUniqueIndex = i;
                while(nextUniqueIndex<nums.length){
                    if(nums[nextUniqueIndex]===previousElement || 
                      nums[nextUniqueIndex]<previousElement){
                        nextUniqueIndex++;
                    } else {
                        nums[i]=nums[nextUniqueIndex];
                        previousElement = nums[nextUniqueIndex];
                        size++;
                        break;
                    }
                }
            } else if(previousElement<nums[i]){
                previousElement=nums[i];
                size++
            }
        }
        return size;
    };

    function removeElement(nums: number[], val: number): number {
        let lastIndex = nums.length - 1;
        for(let i=0; i<nums.length; i++){
            while(nums[lastIndex]===val){
                nums[lastIndex]=undefined as unknown as number;
                lastIndex--;
            }
            if(nums[i]===val && lastIndex > 0){
                nums[i]=nums[lastIndex];
                nums[lastIndex]=undefined as unknown as number;
                    lastIndex--;
            }
        }
        return lastIndex+1;
    };