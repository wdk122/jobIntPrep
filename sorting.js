
// shuffle algo -- fisher yates

var shuffle = function(array) {
  var i = 0, j = 0, temp = null;

  for (i = array.length - 1; i > 0; i--) {
    
    j = Math.floor(Math.random() * (i + 1));
    temp  = array[i];
    array[i] =  array[j];
    array[j] = temp;
  }
  return array;
};

var unsorted = shuffle([0,1,2,3,4,5,6,7,8,9]);

// ==================================================================

var insertionSort = function(items) {
  var len     = items.length,     // number of items in the array
      value,                      // the value currently being compared
      i,                          // index into unsorted section
      j;                          // index into sorted section

  for (i = 0; i < len; i++) {

      // store the current value because it may shift later
      value = items[i];

      /*
       * Whenever the value in the sorted section is greater than the value
       * in the unsorted section, shift all items in the sorted section over
       * by one. This creates space in which to insert the value.
       */
      for (j = i - 1; j > -1 && items[j] > value; j--) {
          items[j + 1] = items[j];
      }

      items[j + 1] = value;
  }

  return items;
}

// ==================================================================

var bubbleSort = function(items) {
  var i,
      j,
      temp,
      len = items.length;

  for (i = 0; i < len - 1; i++) {
    for (j = 0; j < len - 1 - i; j++) {
      if (items[j] > items[j + 1]) {
        temp = items[j + 1];
        items[j + 1] = items[j];
        items [j] = temp;
      }
    }
  }
  return items;
}

// ==================================================================

var selectionSort = function(items) {
  var i,
      j,
      len = items.length,
      mIndex,
      temp;
  for (i = 0; i < len - 1; i++) {
    mIndex = i;
    for (j = i; j < len; j++) {
      if (items[j] < items[mIndex]) {
        mIndex = j;
      }
    }
    temp = items[i];
    items[i] = items[mIndex];
    items[mIndex] = temp;
  }
  return items;
};

// ==================================================================

var mergeSort = function(items) {
  var merge = function(left, right) {
    var result = [];
    il = 0,
    ir = 0;

    while (il < left.length && ir < right.length) {
      if (left[il] < right[ir]) {
        result.push(left[il]);
        il++;
      } else {
        result.push(right[ir]);
        ir++;
      }
    }
    return result.concat(left.slice(il)).concat(right.slice(ir));
  };
  if (items.length < 2) {
    return items;
  }
  var middle = Math.floor(items.length / 2),
      left   = items.slice(0, middle),
      right  = items.slice(middle);
  return merge(mergeSort(left), mergeSort(right));
};


// ==================================================================


// left is left index pointer, vice versa for right
var quickSort = function(items, left, right) {
  var swap = function(items, firstIndex, secondIndex){
    var temp = items[firstIndex];
    items[firstIndex] = items[secondIndex];
    items[secondIndex] = temp;
  };
  // partition chooses a pivot and puts things gt pivot 
  // on right, lt pivot on left
  // it returns the location of the left pointer, which is the new pivot
  var partition = function(items, left, right) {

    var pivot = items[Math.floor((right + left) / 2)],
        i     = left,
        j     = right;


    while (i <= j) { // while left is left of or eq to right

      // find something gtet pivot on left
      while (items[i] < pivot) {
        i++;
      }
      // find something ltet pivot on right
      while (items[j] > pivot) {
        j--;
      }
      
      // if right and left ptrs found a pair to swap
      // and the ptrs havent moved past each other yet:
      if (i <= j) { 
        swap(items, i, j);
        i++;
        j--;
      }
    }

    return i;
  };
  var index;

  if (items.length > 1) {

    if (typeof left != 'number') {
      left = 0;
    }
    if (typeof right != 'number') {
      right = items.length - 1;
    }

    index = partition(items, left, right);

    if (left < index - 1) {
      quickSort(items, left, index - 1);
    }

    if (index < right) {
      quickSort(items, index, right);
    }
  }
  return items;
}

quickSort([2, 8, 3, 6, 4, 1, 5, 7, 9, 0]);


// ==================================================================

var shellSort = function(items) {

}

// ==================================================================

var heapSort = function(items) {

}


// ==================================================================
// sources: 
// http://www.sorting-algorithms.com/
// https://www.nczonline.net/blog/2012/09/17/computer-science-in-javascript-insertion-sort/
// https://www.frankmitchell.org/2015/01/fisher-yates/
// ==================================================================



