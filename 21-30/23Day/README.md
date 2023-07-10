## Equal Sides Of An Array

You are going to be given an array of integers. Your job is to take that array and find an index N where the sum of the integers to the left of N is equal to the sum of the integers to the right of N. If there is no index that would make this happen, return -1.

## Test Cases
- findEvenIndex(\[1,2,3,4,3,2,1\] should return 3
- findEvenIndex(\[1,100,50,-51,1,1\]) should return 1
- findEvenIndex(\[1,2,3,4,5,6\]) should return -1
- findEvenIndex(\[20,10,30,10,10,15,35\]) should return 3
