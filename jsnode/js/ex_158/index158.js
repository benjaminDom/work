let cons = "PS4";
let budg;
const games = [
    {
        name: "Crash Bandicoot N. Sane Trilogy",
        price: 1060,
        sold: 20,
        console: "PS4",
        showDetail: function () {
            console.log(`name ${this.name}`);
            console.log(`price ${this.price}`);
            console.log(`sold ${this.sold}`);
            console.log(`console ${this.console}`);
        }


    },
    {
        name: "Lego Marvel Super Heroes",
        price: 700,
        sold: 25,
        console: "XBOX",
        showDetail: function () {
            console.log(`name ${this.name}`);
            console.log(`price ${this.price}`);
            console.log(`sold ${this.sold}`);
            console.log(`console ${this.console}`);
        }
    },
    {
        name: "Gta V",
        price: 1449,
        sold: 30,
        console: "PS4",
        showDetail: function () {
            console.log(`name ${this.name}`);
            console.log(`price ${this.price}`);
            console.log(`sold ${this.sold}`);
            console.log(`console ${this.console}`);
        }
    },
    {
        name: "Mortal Kombat Xl",
        price: 1190,
        sold: 34,
        console: "PS4",
        showDetail: function () {
            console.log(`name ${this.name}`);
            console.log(`price ${this.price}`);
            console.log(`sold ${this.sold}`);
            console.log(`console ${this.console}`);
        }

    },
    {
        name: "Fifa 2017",
        price: 890,
        sold: 15,
        console: "PS4",
        showDetail: function () {
            console.log(`name ${this.name}`);
            console.log(`price ${this.price}`);
            console.log(`sold ${this.sold}`);
            console.log(`console ${this.console}`);
        }
    }
];

games.forEach(element => {
    element.showDetail();
});
console.log("the budget  I need ");

 let filteredGames=games.filter(function name(params) {
    let res;
    
    if (params.console == cons) {
        res = params;

    }
    return res;



});
let sum=0;
for (let index = 0; index < filteredGames.length; index++) {
    
    sum = filteredGames[index].price+sum;
    
}

budg=sum;
console.log(filteredGames);
console.log(`I need ${budg} CAD to get all this PS$ great games!!`);
