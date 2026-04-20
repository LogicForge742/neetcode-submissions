class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        const map = {}
      // iterate through the array of strings
        for(let word of strs){
            const key = word.split("").sort().join("")

            if(!map[key]){
                map[key] = []
            }

            map[key].push(word)

        }

        return Object.values(map)
    }
}