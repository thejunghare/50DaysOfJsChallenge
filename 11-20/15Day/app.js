const isPangram = (input) => {
    let str = input
	let array = str.split(" ")
    let alpha = "abcdefghijklmnopqrstuvwxyz";
    let alphsArray = alpha.split('');
    let newArray = [];
    array.map(subArray => {
        let element = subArray.split('');
        newArray = [...newArray,element];
    });

    for (let i = 0; i < newArray.length ; i++) {
        
        let element = newArray[i].sort();
        for (let j = 0; j < element.length ; j++) {
            let index = -1;
            for (let k = 0; k < alphsArray.length; k++) {
                    if (alphsArray[k] === element[j]) {
                        index = k; 
                        break; 
                    }                       
            }
            if ( index != -1) {
                alphsArray.splice(index,1);
            } 
        }
    }
    console.log(alphsArray);
    console.log(alphsArray.length);
    if (alphsArray.length > 0) {
        return false
    }else{
        return true
    }

	
}
