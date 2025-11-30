const findDuplicatesWithCount =(arr)=>{
    let dup = [];
    let occurance =[];
  
    
    for(let i=0;i<arr.length;i++)
    {
        let count =1;
        for(let j = i+1;j<arr.length;j++)
        {
            if(arr[i] === arr[j])
            {
                count++
            }
        }
        if(count>1)
        {
              let alreadyCounted = false;
            for(k=0;k<dup.length;k++)
            {
                if(dup[k] === arr[i])
                {
                    alreadyCounted = true;
                break
                }
            }
            
            if(!alreadyCounted)
            {
                dup.push(arr[i]);
                occurance.push(count);
            }
        }
       

    }
    for(let i=0;i<dup.length;i++)
    {
        console.log(dup[i] + " appears " + occurance[i] + " times");
    }   
    
}

findDuplicatesWithCount([1,2,2,3,4,5,2]);