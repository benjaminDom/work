
function swap(items, leftIndex, rightIndex) {
    var temp = items[leftIndex];
    items[leftIndex] = items[rightIndex];
    items[rightIndex] = temp;
}



function sort1(num1, num2, num3, highToLow) {
    let arr = [num1, num2, num3];

        for (let k = 0; k <= arr.length - 3; k++) {

            for (let i = 0; i <= arr.length - (2 + k); i++) {
                if (arr[i] > arr[i + 1]) {
                    swap(arr, i + 1, i);

                }
            }

        }

    if(highToLow){
        
        for(let i=0;i<arr.length;i++){
            arr.splice(i,0, arr[arr.length-1] );
            arr.pop();
        }
    }

        console.log(arr);
    
}

 /* let a = [2, 7, 4, 1, 5, 3];  */
 sort1(10, 8, 25,true);