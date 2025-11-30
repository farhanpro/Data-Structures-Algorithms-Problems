const BubbleSort = (arr)=>{
    let temp = 0;

    for (let i=0;i<arr.length;i++)
    {
        for(let j=0;j<arr.length;j++)
        {
            if(arr[i]> arr[i+j])
            {
                temp = arr[i];
                arr[i] = arr[i+j];
                arr[i+j] = temp;
            }
        }
    }
    return(arr);
}

console.log(BubbleSort([2,1,0,4,87,54,24]));