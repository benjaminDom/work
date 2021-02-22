let user={
    username: null,
    password:null,
    greet:function(){  if(this.username!=null){console.log(`Hello, I'm user ${this.username}`)}else{console.log(`Please assig a username `)} },
    updatePassword:function(param){this.password=param;},
    updaterUsername:function(param){this.username=param;},
 }

 user.greet();
/*  user.username="vandit"; */
 user.updaterUsername("ben");
 user.updatePassword("pass")
 user.greet();
