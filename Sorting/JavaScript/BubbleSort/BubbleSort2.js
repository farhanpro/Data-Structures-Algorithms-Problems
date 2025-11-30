const BubbleSort = (arr) =>{
    let temp = 0;
    for(let i=0;i<arr.length;i++)
    {
        for (let j = 0 ;j<arr.length;j++)
        {
            if(arr[j] > arr[j+1] )
            {
                temp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = temp;
            }
        }
    }
    return (arr);
}

console.log(BubbleSort([24,53,1,2,54,66,75,3,0,5,3]));