export const arrayClone = (arr: any) => {
  let i, copy;
  if (Array.isArray(arr)) {
    copy = arr.slice(0);
    for (i = 0; i < copy.length; i++) {
      copy[i] = arrayClone(copy[i]);
    }
    return copy;
  } else if (typeof arr === 'object' && !(arr instanceof Date) && !(arr instanceof File)) {
    let obj = {};
    for (let key in arr) {
      if (arr.hasOwnProperty(key)) {
        if ((Array.isArray(arr[key])) || (typeof arr[key] === 'object')) {
          obj = {...obj, [key]: arrayClone(arr[key])}
        } else {
          obj = {...obj, [key]: arr[key]}
        }
      }
    }
    return obj;
  } else {
    return arr;
  }
};