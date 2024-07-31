class User {
    constructor(username){
        this.username = username
    }
    logMe(){
        console.log(`Username is ${this.username}`);
    }
}

class Teacher extends User {
    constructor(username, email, password){
        super(username)
        this.email = email
        this.password = password
    }
    addCourse(){
        console.log(`New course was added by ${this.username}`);
    }
}

const teacher1 = new Teacher("asim47", "asim@gmail.com", 4321)

teacher1.logMe()


const teacher2 = new User("arbaz", "arbaz@gmail.com", 321)
teacher2.logMe()


console.log(teacher1 instanceof User);