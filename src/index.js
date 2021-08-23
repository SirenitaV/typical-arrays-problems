
exports.min = function min (array) {
	
	if (array === undefined || array.length === 0) { 
	         return 0
	           }
			else
			{
            return Math.min.apply(null, array);
			}
   
}

exports.max = function max (array) {
	if (array === undefined || array.length === 0) { 
	         return 0
	           }
			   else {
	return Math.max.apply(null, array);
}
}

exports.avg = function avg (array) {
  if (array === undefined || array.length === 0) {
    return 0;
    }

else {
let total = 0;
let sum = 0;

array.forEach(function(item, index) {
 total += item;
 sum++;
}); 

return total/sum;
}
}

