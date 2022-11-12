// var info :{
//     name:string,
//     surname:string,
//     birthyear:number,
//     calgulateage:any
// }

// info = {
//     name:"Jony",
//     surname:"morgan",
//     birthyear:1995,
//     calgulateage:(databirthYear:number,currentYear:any)=>{
//         console.log(`${info.name} is ${currentYear-databirthYear}`);
        
//     }
// }
// info.calgulateage(info.birthyear,new Date().getFullYear())
// console.log(typeof Date());
//  class Data {

//  }
//  const myData = new Data();
//  console.log(typeof myData);
 

// var a:string[] = ['table','data'];
// a['myname'] = 'book';
// console.log(a);

// var car:string = 'red';
// var colorCar = (color:'blue'|'green'|'red'):void=>{
//     car = color;
// }
// colorCar('blue');
// console.log(car);



// crud
// add, get, update, delete

interface IDatabase{
    add();
    get();
    update();
    delete();
}

class MySql implements IDatabase{
    add(){console.log('mysql added');
    };
    get(){console.log( 'mysql get');
   };
    update(){console.log('mysql update');
    };
    delete(){console.log('mysql delete');
    };
}

class MongoDB implements IDatabase{
    add(){console.log('MongoDB added');
    };
    get(){console.log( 'MongoDB get');
   };
    update(){console.log('MongoDB update');
    };
    delete(){console.log( 'MongoDB delete');
   };

}

function AddDatabase(database:IDatabase){
        database.add();
}
function DeleteDatabase(database:IDatabase){
    database.delete();
}
AddDatabase(new MongoDB());
DeleteDatabase(new MongoDB())
// tsc index.ts -w