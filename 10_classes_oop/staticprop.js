class User{
    constructor(username){
        this.username = username
    }
    logMe(){
        console.log(`Username: ${this.username}`);
    }
    static creatId(){
        return `123`
    }
}


const hashir = new User("Hashir")

// console.log(hashir.creatId());



class Teacher extends User {
    constructor(username, email){
        super(username)
        this.email = email
    }

}

const teacherAssis  = new Teacher("Hashir", "hak47@gmail.com")

// console.log(teacherAssis.logMe());
teacherAssis.logMe()

