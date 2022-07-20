export function numberCount(num){
    let y = 100000000
    let w = 10000
    if(num < 10000) return num
    if(num > y){
       return num = Math.floor(num / y) + '亿'
    }
    if(num > w){
        return num = Math.floor(num / y) + '万'
    }
}