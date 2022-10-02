export const findMax = (array)=>{
    const max=array[0]
    for(let i = 1;i<array.length; i++){
       if(array[i] > max){
         array[i] = max
       } 
    }
    return max
}