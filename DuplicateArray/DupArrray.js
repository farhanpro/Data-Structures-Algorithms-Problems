function findDuplicates(arr) {
    let duplicates = [];           // final answer
    let n = arr.length;

    for (let i = 0; i < n; i++) {
        let foundLater = false;

        // Step 1: Check if arr[i] appears again after index i
        for (let j = i + 1; j < n; j++) {
            if (arr[i] === arr[j]) {
                foundLater = true;
                break;                 // no need to check further
            }
        }

        // If we didn't find it later → not a duplicate → skip
        if (!foundLater) continue;

        // Step 2: Now we know arr[i] is duplicated
        // But we don't want to add it again if already in duplicates[]
        let alreadyExists = false;
        
        for (let k = 0; k < duplicates.length; k++) {
            if (duplicates[k] === arr[i]) {
                alreadyExists = true;
                break;
            }
        }

        // Only push if it's a new duplicate
        if (!alreadyExists) {
            duplicates.push(arr[i]);
        }
    }

    return duplicates;
}

// Test like a pro
console.log(findDuplicates([3,1,3,3,2,1,4,4,5,5,5,0])); 
// Output: [3, 1, 4, 5]