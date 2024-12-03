const lengthOfLIS = (nums) => {
  const sub = [];
  nums.forEach((num) => {
    let pos = sub.findIndex((x) => x >= num);

    if (pos === -1) {
      sub.push(num);
    } else {
      sub[pos] = num;
    }
  });
  return sub.length;
};

const nums = [10, 9, 2, 5, 3, 7, 101, 18];
console.log(lengthOfLIS(nums));
