const person={
    Name:'akhilesh',
    Age:25,
    details: function(){
    return `${this.Name} is ${this.Age}`
    }
    }
    console.log(person.details());