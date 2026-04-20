class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        // using a unique storage location set create a variable to store it 
        let seen = new Set()
        // looping over the array to check on the values and store them in seen
        for (let num of nums){
            if (seen.has(num)) return true
                seen.add(num)
            
            }
        return false
        }

        
    }

