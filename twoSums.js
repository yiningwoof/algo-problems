var twoSum = function (nums, target) {
  let targets = {};
  for (let i = 0; i < nums.length; i++) {
    if (targets[nums[i]] !== undefined) {
      console.log([i, targets[nums[i]]]);
      return [i, targets[nums[i]]];
    }
    targets[target - nums[i]] = i;
  }
};

let nums = [2, 7, 11, 15];
let target = 9;
twoSum(nums, target);
