class Solution:
    def pivotIndex(self, nums: list[int]) -> int:
        sumFromLeft, sumFromRight = [0] * len(nums), [0] * len(nums)
        sumFromLeft[0], sumFromRight[len(nums)-1] = nums[0], nums[len(nums)-1]
        for idx in range(1, len(nums)):
            sumFromLeft[idx] = sumFromLeft[idx-1] + nums[idx]
        for idx in range(len(nums)-2, -1, -1):
            sumFromRight[idx] = sumFromRight[idx+1] + nums[idx]

        for idx in range(0, len(nums)):
            if(sumFromLeft[idx] == sumFromRight[idx]):
                return idx
        return -1


sol = Solution()
print(sol.pivotIndex([-1, 1, 2]))
