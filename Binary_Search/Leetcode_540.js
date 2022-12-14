var singleNonDuplicate = function (nums) {
  let left = 0,
    right = nums.length - 1
  while (left < right) {
    let mid = left + Math.floor((right - left) / 2)
    if (
      (mid % 2 == 0 && nums[mid] !== nums[mid + 1]) ||
      (mid % 2 == 1 && nums[mid] !== nums[mid - 1])
    )
      right = mid
    else left = mid + 1
  }
  return nums[left]
}
