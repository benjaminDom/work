let hour = 4;


if ( (5 < hour) && (hour < 12)  ) {
    console.log("goodmorning")
} else if ((12 < hour) && (hour < 18)) {
    console.log("good afternoon ");

} else if ((18 < hour) && (hour < 22)) { console.log("good evening"); }
else if ((22 < hour) || (hour < 5)) { console.log("good night"); }