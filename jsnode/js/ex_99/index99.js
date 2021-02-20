let index = 0;
let count = 0;
for (let i = 0; i < 100; i++) {


    if (i % 2 == 0) {

        index = index + i;
        
        console.log("this is count "+count);
        console.log("this is the sum "+index);

        if (index % 2 == 0) {
            count++;
            if (count==21) {
                break;

            }


        }



    }
}