function under_age (age: number) : boolean 
{
 return age < 18
}

function inspect_age (age: number): void
{
    console.log("Your age is", age);
    
    if (!under_age(age)) 
    {
        console.log("adult age")
    } 
    else if (age< 15)
    {
        console.log("you're a teenage");
    } 
    else 
    {
        console.log ("you are a baby ");
    }
}
