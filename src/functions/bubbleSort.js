export default function bubbleSort(arr){
    let sorted;
    do{
      sorted = true;
      for(let i=0;i<arr.length;i++){
        if(arr[i] > arr[i+1]){
          let tmp = arr[i];
          arr[i] = arr[i+1];
          arr[i+1] = tmp;
          sorted = false;
        }
      }
    }
    while(!sorted);
    return arr;
}