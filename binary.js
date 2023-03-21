let numb =[45,12,6,89,2,5]
let target=6
function merge_sort(left_part,right_part) 
{
	let a = 0;
	let b = 0;
	let results = [];

	while (a < left_part.length || b < right_part.length) {
		if (a === left_part.length) {
			
			results.push(right_part[b]);
			b++;
		} 
      else if (b === right_part.length || left_part[a] <= right_part[b]) {
			results.push(left_part[a]);
			a++;
		} else {
			results.push(right_part[b]);
			b++;
		}
	}
	return results;
}

console.log(merge_sort([45,12,6], [89,2,5]));

function binary(numb,target){
	let leftIndex = 0;
	let rightIndex = numb.length-1;
	console.log("left1",leftIndex);
	console.log("right1",rightIndex);
	while(leftIndex <= rightIndex){
	   let middle = Math.floor((leftIndex+rightIndex)/2);
	   console.log("left2",leftIndex);
	   console.log("right",rightIndex)
	   if (numb[middle] === target){
		return middle;
	   }
	   else if(numb[middle]>target){
		rightIndex = middle - 1
	   }
	   else{
		leftIndex = middle + 1
	   }
	}
	return -1
	}
	
	
	console.log(binary(numb,target));

	let arr=[123,89,5,23,9,56]
	function merge_sort(left_part,right_part) 
{
	let c = 0;
	let d = 0;
	let results = [];

	while (c > left_part.length || d > right_part.length) {
		if (c === left_part.length) {
			
			results.push(right_part[d]);
			d++;
		} 
      else if (j === right_part.length || left_part[c] >= right_part[d]) {
			results.push(left_part[d]);
			c++;
		} else {
			results.push(right_part[d]);
			d++;
		}
	}
	return results;
}

console.log(merge_sort([123,89,5], [23,9,56]));

let arr2=[1,4,78,2,67,3];
let targt=34;

function binary(arr2,targt){
let leftIndex = 0;
let rightIndex = arr2.length-1;
console.log("left1",leftIndex);
console.log("right1",rightIndex);
while(leftIndex <= rightIndex){
   let middle = Math.floor((leftIndex+rightIndex)/2);
   console.log("left2",leftIndex);
   console.log("right",rightIndex)
   if (arr2[middle] === targt){
    return middle;
   }
   else if(arr2[middle]>targt){
    rightIndex = middle - 1
   }
   else{
    leftIndex = middle + 1
   }
}
return -1
}


console.log(binary(arr2,targt));










	

	
	
	
	
	
	
	
	
