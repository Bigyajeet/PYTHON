class Solution {
    public static boolean containsDuplicate(int[] nums) {
        // int i,j;
        
        // for(i=0;i<nums.length-1;i++){
        //     for(j=i+1;j<nums.length;j++){
        //        if(nums[i]==nums[j]){
        //         return true;
        //        }

        //     }
        // }
        //     return false;
        Arrays.sort(nums);
        for (int i = 0; i < nums.length - 1; i++) {
            if (nums[i] == nums[i + 1]) {
                return true;
            }
        }
        return false;
    }
        }
        
    
    // public static void main(String args[]){
    //     int nums[]={1,2,3,1};
        
    //     containsDuplicate(nums);

    // }
