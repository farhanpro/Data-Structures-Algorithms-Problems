const HaloweenPyramid = () =>{
    for(let i =0;i<=6;i++)
    {
        for(let space = 0;space <= 6-i;space++)
        {
            process.stdout.write(' ');
        }
        for(let j =0;j<=2*i ; j++)
        {
            if(j%2 == 0)
            {
                    process.stdout.write('$');
            }
            else 
            {

                process.stdout.write('*');
            }
        }
        console.log();
    }
}

HaloweenPyramid()