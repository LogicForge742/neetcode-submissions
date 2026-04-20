class Solution:

    def encode(self, strs: List[str]) -> str:
        # create an empty string 
        s = ""
        for word in strs:
            s += f"{len(word)}#{word}"
        return s 
        
        
    

    def decode(self, s: str) -> List[str]:
        final = []
        i = 0
        while i < len(s):
            j = s.index("#", i)
            length = int(s[i:j])
            word = s[j+1:j+1+length]
            final.append(word)
            i = j + 1 + length


        return final

