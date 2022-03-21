class world{
    constructor (country1,country2){
        this.country1=country1;
        this.country2=country2;
    }
    countryName(){
        const usa =2;
        const uk =22;
        const a=( usa>uk)? 'usa':'uk';
        return `In the War of ${this.country1} and ${this.country2}, ${a} is wining.`

    }

}
const b=new world('Usa','uk');
console.log(b.countryName());