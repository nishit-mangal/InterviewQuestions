let req = "Smart Operations & Edge Computing Platform"
console.log(getTheFrewuency(req))
function getTheFrewuency(s){
    let ans = {}
    if(s.length===0)
        return ans
    for(let i=0; i<s.length; i++){
        let char = s[i]
        if(ans[char]){
            ans[char]+=1
        }else{
            ans[char] = 1
        }
    }
    return ans
}