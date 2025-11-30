const DecreasingTriangle = () =>{
    for(i=0;i<= 6;i++)
    {
        for(j = i;j<=6 ; j++)
        {
            process.stdout.write("*");
        }
        console.log();
    }
}

DecreasingTriangle();