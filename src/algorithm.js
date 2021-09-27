function max(a, b) {
  return a.sum > b.sum ? a : b;
}

function maxt(a, b, c) {
  return max(max(a, b), c);
}

function maxCrossingSum(arr, l, m, h) {
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

  let leftright = {
    sum: left_obj.sum + right_obj.sum,
    elems: left_obj.elems.concat(right_obj.elems),
  };

  return maxt(leftright, left_obj, right_obj);
}

function maxSubArraySum(arr, l, h) {
  if (l === h) return arr[l];

  let m = parseInt((l + h) / 2, 10);

  return maxt(
    maxSubArraySum(arr, l, m),
    maxSubArraySum(arr, m + 1, h),
    maxCrossingSum(arr, l, m, h)
  );
}

export default maxSubArraySum;
