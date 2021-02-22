const games=[
    {name:"Crash Bandicoot N. Sane Trilogy",
    price:1060,
    sold: 20,
    console: "PS4",
    showDetail:function(){
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
        showDetail:function(){
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
        showDetail:function(){
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
        showDetail:function(){
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
        showDetail:function(){
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
