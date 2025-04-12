class Solution {
    public static int searchInsert(int[] nums, int target) {
        int n=nums.length;
        int start=0,end=n-1;
        int ans=n;
        while(start<=end){
            int mid=(start+end)/2;
            if(nums[mid]>=target){
             ans=mid;
                end=mid-1;
            }else{
                start=mid+1;
            }
        }
        return ans;
    }
    public static void main(String args[]){
        int nums[]={1,3,5,6};
        int target=5;
        searchInsert(nums,target);

    }
}