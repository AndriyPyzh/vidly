const findMin = (arr, low, min) => {
	if (low === arr.length) {
		return min;
	}

	return arr[low] < arr[min] ?
		findMin(arr, low + 1, low) :
		findMin(arr, low + 1, min);
}

const arr = [5,2,9,-1,2,3,5];

console.log(findMin(arr,0,0));
