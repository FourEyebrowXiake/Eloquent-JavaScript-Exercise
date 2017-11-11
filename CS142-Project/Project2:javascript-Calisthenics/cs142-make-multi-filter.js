"use strict";
function cs142MakeMultiFilter(originalArray) {
	var currentArray = originalArray;
	return function arrayFilterer(filterCriteria, callback) {
		if (!filterCriteria) {
			return currentArray;
		}

		currentArray = currentArray.filter(filterCriteria);

		if (callback) {
			callback.call(originalArray, currentArray);
		}
		return arrayFilterer;
	}
}
