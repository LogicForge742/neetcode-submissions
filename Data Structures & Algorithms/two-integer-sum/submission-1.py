class Solution:
    def twoSum(self, nums: List[int], target: int) -> List[int]:
        count = {}

        for i, num in  enumerate(nums):
            needed = target - num


            if needed in count:
                return[count[needed],i]

            count[num] = i
                


             
        