// Problem 1 //

    const uniqueValueCount = (array) => {
        if (!array.length) return 0;
    let pointerOne = 0;
    let pointerTwo = pointerOne + 1;
    let uniqueValues = 0;
    
    while (pointerTwo < array.length) {
        if (array[pointerOne] === array[pointerTwo]) {
                pointerTwo += 1; 
        } else {
        uniqueValues =+ 1; 
                pointerOne = pointerTwo
        }
    }
    
    return uniqueValues; 
    }

// Problem 2 // 

    function sumZero(array) {
        let starting_point = 0
        let ending_point = arr.length
        
        while (starting_point < ending_point) {
            if (arr[starting_point] < 0) {
                for ( let find_point = starting_point + 1; find_point < ending_point; find_point++) {
                    if (arr[starting_point] + arr[find_point] === 0) {
                        return [arr[starting_point], arr[find_point]]
                    }
                }
            }
            starting_point += 1;
        }
        return undefined
    }

// Problem 3 //

    function averagePair(array,target){

        let pointerOne = array.length - 1;

        for (let pointerTwo = 0; pointerTwo < pointerOne; pointerTwo++) {
            while (pointerTwo < pointerOne && array[pointerOne] + array[pointerTwo] > 2*target) {
                pointerOne--;
            }
            if (pointerOne != pointerTwo && array[pointerOne] + array[pointerTwo] == 2*target) {
                return true;
            }
        }
        return false;
    }