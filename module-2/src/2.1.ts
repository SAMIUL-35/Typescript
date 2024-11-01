let num: string = "samiul";
console.log(num);
const nam: number = 100;
console.log(nam);

let anythinng:any;

anythinng='samiul';

// (anythinng as number)

// (anythinng as string).

const kmTogm=(value:string |number|undefined)=>{
  if (typeof value==="string")
  {
const convertValue=parseFloat(value)
return convertValue
  }
  else if(typeof value==="number"){
    return value
  }
else return undefined


}

const h=kmTogm(1000) as number