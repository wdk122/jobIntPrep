
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
  
}

// ==================================================================

var shellSort = function(items) {

}

// ==================================================================

var mergeSort = function(items) {

}

// ==================================================================

var heapSort = function(items) {

}

// ==================================================================

var quickSort = function(items) {

}


// ==================================================================
// sources: 
// http://www.sorting-algorithms.com/
// https://www.nczonline.net/blog/2012/09/17/computer-science-in-javascript-insertion-sort/
// https://www.frankmitchell.org/2015/01/fisher-yates/
// ==================================================================


















