class Solution {
     public int lowerbound(int[] nums, int target) {
        int n = nums.length;
        int start = 0, end = n - 1;
        int ans = -1;
        while (start <= end) {
            int mid = start + (end - start) / 2;
            if (nums[mid] >= target) {
                ans = mid;
                end = mid - 1;
            } else {
                start = mid + 1;
            }
        }
        return ans;
    }
    
    public int UpperBound(int[] nums, int target) {
        int n = nums.length;
        int start = 0, end = n - 1;
        int ans = n; 
        while (start <= end) {
            int mid = start + (end - start) / 2; 
            if (nums[mid] > target) {
                ans = mid;
                end = mid - 1;
            } else {
                start = mid + 1;
            }
        }
        return ans;
    }
    public int[] searchRange(int[] nums, int target) {
        int n = nums.length;
        int lb = lowerbound(nums, target);

        if (lb == -1 || lb == n || nums[lb] != target) {
            return new int[]{-1, -1};
        }

        int ub = UpperBound(nums, target);

        return new int[]{lb, ub - 1};
    }

        
    }
