function findSumOfDistinctElements(set1, set2) {
  let sum = 0;
  let seen = new Set();

  for (let i = 0; i < set1.length; i++) {
    if (!seen.has(set1[i])) {
      sum += set1[i];
      seen.add(set1[i]);
    }
  }

  for (let i = 0; i < set2.length; i++) {
    if (!seen.has(set2[i])) {
      sum += set2[i];
      seen.add(set2[i]);
    }
  }

  return sum;
}

let set1 = [3, 1, 7, 9];
let set2 = [2, 4, 1, 9, 3];

console.log(findSumOfDistinctElements(set1, set2));