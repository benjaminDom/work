function getUserID() {
    return 20;


}


function isUserValid() {
    let bool;
    if (getUserID() > 30) {
        bool = true;

    }
    else {
        bool = false;
    }

    return bool;

}


if (isUserValid()) {
    console.log("UserValid");

} else {
    console.log("userNotValid");
}



