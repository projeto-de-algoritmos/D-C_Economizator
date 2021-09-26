// A Divide and Conquer based program for maximum subarray
// sum problem

// A utility function to find maximum of two integers
function max(a, b) {
  return a.sum > b.sum ? a : b;
}

// A utility function to find maximum of three integers
function maxt(a, b, c) {
  return max(max(a, b), c);
}

// Find the maximum possible sum in arr[] auch that arr[m]
// is part of it
function maxCrossingSum(arr, l, m, h) {
  // Include elements on left of mid.
  let obj = {
    sum: 0,
    elems: [],
  };
  let left_obj = {
    sum: Number.MIN_VALUE,
    elems: [],
  };
  for (let i = m; i >= l; i--) {
    obj.sum = obj.sum + arr[i].value;
    obj.elems.push(arr[i]);

    if (obj.sum > left_obj.sum) {
      left_obj = JSON.parse(JSON.stringify(obj));
    }
  }

  obj = {
    sum: 0,
    elems: [],
  };
  let right_obj = {
    sum: Number.MIN_VALUE,
    elems: [],
  };
  for (let i = m + 1; i <= h; i++) {
    obj.sum = obj.sum + arr[i].value;
    obj.elems.push(arr[i]);
    if (obj.sum > right_obj.sum) {
      right_obj = JSON.parse(JSON.stringify(obj));
    }
  }

  // Return sum of elements on left and right of mid
  // returning only left_sum + right_sum will fail for
  // [-2, 1]

  let leftright = {
    sum: left_obj.sum + right_obj.sum,
    elems: left_obj.elems.concat(right_obj.elems),
  };

  // console.log("left", left_obj);
  // console.log("right", right_obj);

  return maxt(leftright, left_obj, right_obj);
}

// Returns sum of maximum sum subarray in aa[l..h]
function maxSubArraySum(arr, l, h) {
  // Base Case: Only one element

  if (l == h) return arr[l];

  // Find middle point
  let m = parseInt((l + h) / 2, 10);

  /* Return maximum of following three possible cases
                a) Maximum subarray sum in left half
                b) Maximum subarray sum in right half
                c) Maximum subarray sum such that the subarray
        crosses the midpoint */
  return maxt(
    maxSubArraySum(arr, l, m),
    maxSubArraySum(arr, m + 1, h),
    maxCrossingSum(arr, l, m, h)
  );
}

export default maxSubArraySum;
