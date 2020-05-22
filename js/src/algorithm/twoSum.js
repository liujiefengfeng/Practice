const twoSum = (nums, target) => {
  const values = new Map();
  
  for (let i = 0; i < nums.length; i++) {
    const targetValue = target - nums[i];
    const matchValue = values.get(targetValue);
    if (matchValue != undefined) {
      return [matchValue, i];
    }
    values.set(nums[i], i);
  }
};
