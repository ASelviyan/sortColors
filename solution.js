//PROBLEM
//You are given an array of numbers each number has a corresponding color, 0 is red, 1 is blue , and white is 2                          . 
//The numbers need to be sorted is order of 0, 1, 2 or red, white, and blue


//CONSTRAINTS 
// n will always equal the numbers length 
// n will always be bigger or equal to 1 AND n will be smaller or equals to 300
// number at i is either 0, 1, or 2


var sortColors = function (nums) {
    // create 3 empty arrays (red blue and white)
    let red = 0;
    let blue = 0;
    let white = 0;
    // iterate through the array 
    for (let i = 0; i < nums.length; i++) {
        // if the number is 0 
        if (nums[i] === 0) {
            //then add to red count
            red++;

            // if the number is 1
        } else if (nums[i] === 1) {
            // then add to white count    
            white++;

            // if the number is 2 
        } else if (nums[i] === 2) {
            // then add to blue count
            blue++;
        }
    }
    //iterate through array again 
    for (let j = 0; j < nums.length; j++) {
        // if red is bigger then 0 
        if (red > 0) {
            // then make that index's value a zero 
            nums[j] = 0
            //subtract from the red count 
            red--

            // if white is bigger then 0 
        } else if (white > 0) {
            // then make that index's value a one
            nums[j] = 1
            //subtract from the white count 
            white--

            // if blue is bigger then 0 
        } else if (blue > 0) {
            // then make that index's value a two
            nums[j] = 2
            //subtract from the blue count 
            blue--
        }
    }
};