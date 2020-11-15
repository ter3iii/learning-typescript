function valid_index(input: number [], index: number): boolean {
let greater_than_0: boolean= (index >=0)
let less_than_length: boolean= (index < input.length)
return greater_than_0 && less_than_length; 
}

function array_number (input: number [], index: number): void {
    if  (valid_index(input, index)){
console.log (input[index]);
    }
    else 
    {
   console.log ("error")
    }
    }
    array_number([1,2,3,4],0)
    array_number([1,2,3,4],1)
    array_number([1,2,3,4],2)
    array_number([1,2,3,4],3)
    array_number([1,2,3,4],4)
    array_number([1,2,3,4],5)
