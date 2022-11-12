// var info :{
//     name:string,
//     surname:string,
//     birthyear:number,
//     calgulateage:any
// }
class MySql {
    add() {
        console.log('mysql added');
    }
    ;
    get() {
        console.log('mysql get');
    }
    ;
    update() {
        console.log('mysql update');
    }
    ;
    delete() {
        console.log('mysql delete');
    }
    ;
}
class MongoDB {
    add() {
        console.log('MongoDB added');
    }
    ;
    get() {
        console.log('MongoDB get');
    }
    ;
    update() {
        console.log('MongoDB update');
    }
    ;
    delete() {
        console.log('MongoDB delete');
    }
    ;
}
function AddDatabase(database) {
    database.add();
}
function DeleteDatabase(database) {
    database.delete();
}
AddDatabase(new MongoDB());
DeleteDatabase(new MongoDB());
// tsc index.ts -w
