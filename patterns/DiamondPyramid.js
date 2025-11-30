const DiamondPyramid = () =>{
    for(let i =0;i<=6;i++)
    {
        for(let space = 0 ; space <= 6-i; space ++)
        {
            process.stdout.write(' ');
        }
        for(let j=0;j<=2*i;j++)
        {
            process.stdout.write('-');
        }
        console.log();
    }

    for(let i =6;i>=0;i--)
    {
        for(let space = 0; space <= 6-i;space++ )
        {
            process.stdout.write(' ')
        }
        for(let j =0;j<=2*i;j++)
        {
            process.stdout.write('-')
        }
        console.log();
    }
}
DiamondPyramid();