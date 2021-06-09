'use strict';
let a = prompt("Input a",);
let b = prompt("Input b",);
let c = prompt("Input c",);
if(a != 0){
	let D = b ** 2 - 4 * a * c;
	if(D > 0){
	    let x1 = (-b - Math.sqrt(D)) / (2 * a);
	    let x2 = (-b + Math.sqrt(D)) / (2 * a);
	    console.log("First root:", Math.floor(x1 * 100) / 100);
	    console.log("Second root:", Math.floor(x2 * 100) / 100);
	} else if(D == 0){
	    let x = -b / (2 * a);
	    console.log("Root:", Math.floor(x * 100) / 100);
	} else{
	    let x = -b / (2 * a);
	    let y = Math.sqrt(-D) / (2 * a);
	    if(b != 0){
	    	console.log("First root:", Math.floor(x * 100) / 100, "-", Math.floor(y * 100) / 100, "i");
	    	console.log("Second root:", Math.floor(x * 100) / 100, "+", Math.floor(y * 100) / 100, "i");
	    }else{
	    	console.log("First root:", "-", Math.floor(y * 100) / 100, "i");
	    	console.log("Second root:", Math.floor(y * 100) / 100, "i");
	    }
	}
} else{
	if(b != 0){
		let x = -c / b;
		console.log("Root:", Math.floor(x * 100) / 100);
    } else{
    	if(c != 0){
    		console.log("No solutions");
    	} else{
    		console.log("All Real numbers");
    	}
    }
}