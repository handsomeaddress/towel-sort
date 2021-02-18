
// You should implement your task here.

module.exports = function towelSort (matrix) {
	let result = '';
	if(matrix){
		matrix.forEach((el,i) => {
			i++;
			if(i % 2 == 0){
				result += el.reverse().toString();
			}else{
				result += el.toString();
			}
			result += ',';
		});
	}
	result = result.split(',');
	return result.splice(0, result.length - 1);
}
