function runProgram(input) {
    input = input.trim().split("\n");
    let n = +input[0];
    let arr = input[1].trim().split(" ").map(Number);
    
    quickSort(arr,0,arr.length-1)
    console.log(arr.join(" "))
    function quickSort(arr, left, right){
        if(left>=right){
            return;
        }
        let index = partition(arr, left, right);
        quickSort(arr, left, index-1)
        quickSort(arr,index+1, right)
    }
    
    function partition(arr, left, right){
        let low = left;
        let high = right;
        let pivot = left;
        
        while(low<high){//
            while(low<right&&arr[low]<=arr[pivot]){
                low++
            }
            while(high>=low&&arr[high]>arr[pivot]){
                high--
            }
            
            if(low<high){
                swap(arr, low, high);
            }
        }
        swap(arr,high,pivot);
        return high;
    }
    
    function swap(arr, l, h){
        let temp = arr[l];
            arr[l] = arr[h];
            arr[h] = temp;
    }
 }
 if (process.env.USER === "") {
   runProgram(``);
 } else {
   process.stdin.resume();
   process.stdin.setEncoding("ascii");
   let read = "";
   process.stdin.on("data", function (input) {
     read += input;
   });
   process.stdin.on("end", function () {
     read = read.replace(/\n$/, "");
     read = read.replace(/\n$/, "");
     runProgram(read);
   });
   process.on("SIGINT", function () {
     read = read.replace(/\n$/, "");
     runProgram(read);
     process.exit(0);
   });
 }
 
 