function findDuplicatesWithCount(arr) {
    let duplicates = [];
    let counts = [];
    for (let i = 0; i < arr.length; i++) {
        let count = 1;
        // Count how many times arr[i] appears after i
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] === arr[j]) {
                count++;
            }
        }
        // If count > 1, it's a duplicate
        if (count > 1) {
            // Check if already processed
            let alreadyCounted = false;
            for (let k = 0; k < duplicates.length; k++) {
                if (duplicates[k] === arr[i]) {
                    alreadyCounted = true;
                    break;
                }
            }
            if (!alreadyCounted) {
                duplicates.push(arr[i]);
                counts.push(count);
            }
        }
    }
    // Print result
    for (let i = 0; i < duplicates.length; i++) {
        console.log(duplicates[i] + " appears " + counts[i] + " times");
    }
}
findDuplicatesWithCount([1,2,2,3,4,3]);