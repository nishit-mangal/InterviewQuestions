let obj = {
  India: {
    Karnataka: ["Bangalore", "Mysore"],
    Maharashtra: ["Mumbai", "Pune"],
  },
  USA: {
    Texas: ["Dallas", "Houston"],
    IL: ["Chicago", "Aurora", "Pune"],
  },
};

let inputState = 'Pune'

console.log(getArrOfStates(inputState))
function getArrOfStates(state){
    let ans = []
    let countryArr = Object.keys(obj)
    if(countryArr.length===0)
        return ans
    for(let i=0; i<countryArr.length; i++){
        let stateArr = Object.keys(obj[countryArr[i]])
        if(stateArr.length===0){
            console.log(`No state exists for country ${countryArr[i]}`)
            continue
        }
        for(let j=0; j<stateArr.length; j++){
            let cityArr = obj[countryArr[i]][stateArr[j]]
            if(cityArr.includes(state))
                ans.push(stateArr[j])
        }
    }
    return ans
}
