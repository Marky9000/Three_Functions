



AddAsArrow=(num1,num2)=>{
    const squaredandadded = num1*num1 + num2*num2;
    return squaredandadded*squaredandadded;
}
const AddAsDeclaration = function(num1, num2){
    const squaredAndadded= (num1*num1)+(num2*num2);
    return squaredAndadded*squaredAndadded;
}
function AddasExpression(num1,num2){
    const squaredAndadded= (num1*num1)+(num2*num2);
    return squaredAndadded*squaredAndadded;

}



// 
console.log(
AddAsDeclaration(5,6),
AddAsArrow(5,6),AddasExpression(5,6)
)
console.log(
    AddAsDeclaration(123,456),
    AddAsArrow(123,456),AddasExpression(123,456)
    )
