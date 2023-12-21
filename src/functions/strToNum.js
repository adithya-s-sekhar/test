export default function strToNum(x){
    for(let i=0;i<x.length;i++){
        x[i] = Number(x[i]);
      }
      return x;
}