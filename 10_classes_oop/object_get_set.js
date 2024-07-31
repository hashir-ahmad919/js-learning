const User = {
    _email: 'h@hc.com',
    _password: "abc",

    getEmail: function(){
        return this._email.toUpperCase()
    },

    setEmail: function(value){
        this._email = value
    }
} 

const tea = Object.create(User)
console.log(tea.email);