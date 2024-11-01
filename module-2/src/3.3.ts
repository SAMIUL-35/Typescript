{

// generic type

type GenericArray<T> =Array<T>

// const rollNumbers:number[]=[1,2,8]
// const mentors:string[]=['m','v']
// const boolArry:boolean[]=[true,false]
const rollNumbers:GenericArray<number>=[1,2,8]
const mentors:GenericArray<string>=['m','v']
const boolArry:GenericArray<boolean>=[true,false]

const user:GenericArray<{name:string,age:number}>=[
  {name:'samiul',
    age:200
  },
  {name:'nabil',
    age:200
  }
]
type GenericTupple<x,y>=[x,y]
const manus:GenericTupple<string,string>=['me','he']

const userWithid:GenericTupple<number,{name:string}=[1234,{name:'samiul',}]



}