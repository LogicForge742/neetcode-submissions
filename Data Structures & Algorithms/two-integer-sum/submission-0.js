class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        let seen = {}

        for(let i = 0; i < nums.length; i++){
            let int = nums[i]
            let needed = target - int
        

            if (needed in seen){

                return [seen[needed],i]
            }
            seen[int] = i
        }

    }
}
