const SelectionSore = (arr) =>{
    for(let i = 0;i<arr.length -1;i++)
    {
        let m = i;
        let temp = arr[i];
        for(let j = i+1; j < arr.length ; j++)
        {
            if(arr[j] < arr[m])
            m = j
        }
        arr[i] = arr[m];
        arr[m] = temp;

    }
    return(arr)
}

console.log(SelectionSore([1,2,3,45,0,53]))