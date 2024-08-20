

const reduceLayouts = (obj)=>{
    const keys = Object.keys(obj)
    const min = {
        value:obj[keys[0]],
        key: keys[0]
    }


    for(let i=1;i<keys.length;i++){
        if(min.value > obj[keys[i]]){
            min.value = obj[keys[i]]
            min.key = keys[i]
        }
    }
    return min
}
module.exports = {reduceLayouts}
