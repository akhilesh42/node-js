let profile= {
    name:'akhil',
    tech :'JS',
    laptop1: {
        cpu:'i5',
        ram:8,
        brand:'macbook'
    }
}

console.log(profile?.laptop?.cpu?.length); //it will not give error, just give undefined because we use ? sign