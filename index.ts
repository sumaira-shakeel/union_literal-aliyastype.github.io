//union type
// let unionType :string | number | boolean | null |undefined 

// unionType = "Sumaira Shaakeel";
// unionType = "Ayan Shakeel";
// unionType = "Aiza shakeel";
// unionType = "Ibrahim shakeel";

// unionType =200;
// unionType = 3000;

// unionType =true;
// unionType =null;
// unionType =undefined;
// /-----------------literal type-----------------------------

// let literalType :"sumaira shakeel" | 20000
// literalType = "sumaira shakeel";
// literalType = 20000; 
// let newAge = Math.random() > 0.6 ? "khan" : 60 ;
//newAge.tolowercase();Error:Transpiler cannot narrow
// if( newAge === "khan"){
//     //Type of newAge:string
//     newAge.toUpperCase();
// }
// typeof newAge === "string"
// ? newAge.toUpperCase() //ok:string
// :newAge.toFixed(); //ok:number
// let age :number| "died" | "unknown" 
// age = 30;
// age = "died";
// age = "unknown";
// age = "living"//its throw an error
// let  Zia : "Zia" 
// Zia = "Zia";
// Zia = "khan";//error

//Type aliyase// aik type ko as a variable decleared krte hen or baad me as a variable use krte hen --------------
// type RowData = boolean | number |string | null | undefined:
// let data :RowData;
// data = true;
// data =200;
// data = "Sumaira Shakeel";
// data = null;
// data = undefined;
// you can even combine them
// type iD = number | string ;
// type idMaybe = iD | undefined |null ;
// let myAge :idMaybe = "sana";
// myAge = 30;

// let a :string |number | boolean = 1000;
// let b :string |number | boolean = "sumaira";
// let c :string |number | boolean = false;

// type aliyaseType = string | number | boolean ; //aliyaseType is a variable where b we store a data type

// let d :aliyaseType = 1000;
// let e :aliyaseType = "sumaira";
// let f :aliyaseType = false ;
// type Color = "red" | "green" | "blue";
// function setColor(color:Color){
//     console.log(`color set to ${color} color.`);
// }
// setColor("red");// valid
// setColor("green");// valid
// setColor("blue");// valid

// setColor("yellow");// error

