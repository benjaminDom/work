function showNumbers(s, e) {

    if (typeof s == "number" || typeof e == "number") {


        if (s < e) {


            for (let i = 1; i < e - s; i++) {
                console.log(s + i);
            }

        } else if (e < s) {
            for (let i = 1; i < s - e; i++) {
                console.log(s - i);
            }

        }
    }
/* console.log("type a number please") */
}
showNumbers(250, 10);