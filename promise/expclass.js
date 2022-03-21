class person{
    fName='surya';
    lName='rao';
    address='nellore';
    getDetails(){
        return `My Name is ${this.fName} and my surname is  ${this.lName} or i am live in ${this.address}`
    }
    }
    person1=new person();
    exports.person=person;