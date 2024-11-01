type rollNumber=number

type rollNumber2 =rollNumber&{roll:string}

interface student{
  roll:number,
  class:string
}
interface student2 extends student{
  roll:rollNumber2
}


type  add=(a:number,b:number)=>number;
interface add2 {
  (a:number,b:number):number
};

type a= number[];

interface d{
  a: number[];
}
interface c{
  nam:string;
  roll:number;
  
}