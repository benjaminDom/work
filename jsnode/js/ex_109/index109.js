function validateUser(user, pass) {
    bool = true;
    let name1 = "nacho";
    let name2 = "pedro";
    let name3 = "marta";

    let pass1 = "Nerd1979";
    let pass2 = "Batman0217";
    let pass3 = "Mother2312";


    let cond1 = (user == name1 && pass == pass1);
    let cond2 = (user == name2 && pass == pass2);
    let cond3 = (user == name3 && pass == pass3);



    if (cond1 || cond2 || cond3) {

        console.log(`Welcome ${user} noce  to see  you again`);


    } else {
        console.log("please  input  valid  credentials ");
        bool=false;
    }

    return bool;

}


  let res=validateUser("nachoo","Nerd1979");
  console.log(res);