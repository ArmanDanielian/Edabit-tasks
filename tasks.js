// 	Here you can find all the tasks that are not added to Edabit,
// 	because it has a free plan limit.
// 	After reaching 460 xp in Edabit I could not save solved tasks.

//--------------------------------------------------

// Given a number n ( n > 0 ). Print Fibonacci series up to n.

function fibo(n){
 let arr = [0,1];
 for(let i=0; i<n; i++){
 	if((x = arr[i] + arr[i+1]) < n){
 		arr.push(x);
 	}
 	return arr;
 }
}
console.log(fibo(107));


//--------------------------------------------------

// Given an array of numbers. Create an array containing only elements once.

function removeDuplicate(arr) {
	let resArr = [];
	for (let i=0; i<arr.length; i++) {
		if (!resArr.includes(arr[i])) {
			resArr.push(arr[i]);
		}
	}
	return resArr;
}
console.log(removeDuplicate([7,2,9,7,14,21,23,44,51,7,14,9,6,14]));

//--------------------------------------------------

function zipIt(women, men) {
	let arr = [];
	if(men.length != women.length){
		return "sizes don't match";
	} else {
		for(let i=0; i<men.length; i++){
			arr.push([women[i], men[i]]);
		}
		return arr;
	}
}


//--------------------------------------------------


function findNaN(number) {
	return number.findIndex((element) => isNaN(element))
}

//--------------------------------------------------


function mirror(arr) {
	length = arr.length;
	for(let i=0; i<length-1; i++){
		arr.push(arr[length-2-i]);
	}
	return arr;
}

//--------------------------------------------------

const imgurUrlParser = url => {
  let arr = url.split('/');
  let obj = {}
  if(arr.length == 5) {
    obj.id = arr[arr.length-1];
    obj.type = arr[arr.length-2];
  } else if(arr.length == 4) {
    obj.id = arr[arr.length-1];
    obj.type = 'image';
  } else if(arr.length == 4 && arr[length-1].includes('.png')){
    obj.id = arr[arr.length-1];
    obj.type = arr[arr.length-1].slice(0, -4);
  }
  
  return obj;
}

//--------------------------------------------------

function products(r) {
	let arr = Object.entries(r).sort((a,b) => b[1] - a[1]);
  return arr.filter(item => item[1] >= 500).map(item => item[0])
}

//--------------------------------------------------

function twentyFiveOnOne(cart) {
  cart.forEach((item, index, array) => {
    array[index] = [item.price, item.quantity]  
  })
  cart.sort((a,b) => {
    return b[0] - a[0]
  })
  let sum = cart.reduce((accum, item, index, array) => {
    if(index == 0) {
      if (item[1] == 1) {
        return accum += 0.75 * item[0]
      } else {
        accum += 0.75 * item[0]; 
        return accum += item[0] * (item[1]-1)
      }
    } else {
      return accum += item[0]*item[1]
    }
  }, 0)
  return +sum.toFixed(2)
}

//--------------------------------------------------

function capToFront(s) {
	let caps = s.match(/[A-Z]/g);
  let lows = s.replace(/[A-Z]/g, '');
  let arrOfLows = lows.split('');
  arrOfLows.unshift(...caps);
  return arrOfLows.join('')
}


//--------------------------------------------------


function isIsogram(str) {
	let prev, next;
  let flag = true;
  str.toLowerCase().split('').forEach((item, index, arr) => {
    prev = arr.slice(0, index+1)
    next = arr.slice(index+1)
    if(prev.includes(item) && next.includes(item)) {
      flag = false
    }
  });
  return flag
}


//--------------------------------------------------


function uncensor(str, vowels) {
	var arr = vowels.split('')
	return str.replace(/(\*)/g, (f,d,l,m)=>{
		return arr.shift()
	})
}

//--------------------------------------------------

function sumSalaries(department) {
  if (Array.isArray(department)) { // case (1)
    return department.reduce((prev, current) => prev + current.salary, 0); // sum the array
  } else { // case (2)
    let sum = 0;
    for (let subdep of Object.values(department)) {
      sum += sumSalaries(subdep); // recursively call for subdepartments, sum the results
    }
    return sum;
  }
}

//--------------------------------------------------

const clockwiseCipher = message => {
	let len = Math.ceil(Math.sqrt(message.length));
	const sideLen = len,
				letters = [...message],
				arr = Array.from(Array(len), () => Array(len).fill(0)),
				nextChar = () => letters.shift() || " ";

	for (let i = 0, cycles = Math.ceil(len / 2); i < cycles; i++, len -= 2) {
		if (len === 1) arr[i][i] = nextChar();
		else {			
			for (let j = 0; j < len - 1; j++) {
				arr[i][j + i] = nextChar();
				arr[i + j][sideLen - i - 1] = nextChar();
				arr[sideLen - i - 1][sideLen - (j + i) - 1] = nextChar();
				arr[sideLen - (j + i) - 1][i] = nextChar()
			}
		}
	}
	return arr.map(a => a.join``).join``;
}

function clockwiseCipher(message) {
	message = [...message];
	const size = Math.ceil(Math.sqrt(message.length));
	let square = Array.from({length: size}, _ => new Array(size).fill(" "));
	let j = 0;
	let k = 4*(size - 2*j - 1) || 1;

	while (k > 0) {
		for (let i = 0; i < k && message.length; i++) {
			let y, x;
			if (i % 4 === 0) [y, x] = [j, i/4 + j];
			if (i % 4 === 1) [y, x] = [(i-1)/4 + j, (size-1) - j];
			if (i % 4 === 2) [y, x] = [(size-1) - j, (size-1) - ((i-2)/4 + j)];
			if (i % 4 === 3) [y, x] = [(size-1) - ((i-3)/4 + j), j];
			square[y][x] = message.shift();
		}
		j++;
		k = 4*(size - 2*j - 1) || 1;
	}
	
	return square.flat().join("");
}

//--------------------------------------------------

function shiftToLeft(x, y) {
	if (y == 0) return x;
	return 2 * shiftToLeft(x, y - 1);
}

//--------------------------------------------------

function isFactorial(number) {
	let factorial = 1;
  for(let i=2; factorial<number; i++){
    factorial*=i
  }
  return number === factorial;
}


//--------------------------------------------------


function migrateProduct(oldProduct) {
	const newProduct = {...oldProduct}
  newProduct.containers = []
  for(let i=0; i<oldProduct.containers.length; i++) {
    newProduct.containers[i] = {...oldProduct.containers[i]}
  }
  newProduct.price *= 1.15
  newProduct.containers = newProduct.containers.map((container => {
    if (container.type === 'bottle') {
      container.deposit = 0.20
      return container
    } 
    return container
  }))
  
  return { oldProduct, newProduct }
}


//--------------------------------------------------


function vendingMachine(products, money, productNumber) {
	if (productNumber<1 || productNumber>9) {
    return "Enter a valid product number"
  }
  let product = products.find(item => item.number === productNumber)
  if (money < product.price) {
    return "Not enough money for this product"
  }
  let change = []
  let coins = [500, 200, 100, 50, 20, 10].reduce((accum, item) => {
    if(accum - item >= 0){
      while(accum - item >= item) {
        accum -= item
        change.push(item)
      }
      change.push(item)
      return accum - item
    } else {
      return accum
    }
  }, money-product.price)
  let result = {}
  result.product = product.name
  result.change = change
  return result
}


//--------------------------------------------------


function getLength(arr) {
	if(!Array.isArray(arr)) {
		return 1
	}
	let count = 0;
	for(let i=0; i<arr.length; i++) {
		count += getLength(arr[i])
	}
	return count
}

//--------------------------------------------------


function duplicateNums(nums) {
	let arr = nums.sort((a,b) => a-b).filter((item, index, array) => item === array[index+1])
	return arr.length == 0 ? null : arr	
}

//--------------------------------------------------

function missing(arr1, arr2) {
	arr2.forEach((item, index, array) => {
    let pos = arr1.indexOf(item)
    if(pos != -1){
      arr1.splice(pos, 1)
    }
  })
  return arr1[0]
}

//--------------------------------------------------

function canConcatenate(arr, target) {
	arr = arr.reduce((accum, item, index, array) => {
    accum.push(...item)
    return accum
  }, [])
  let flag
  arr.sort((a,b) => a-b)
  target.sort((a,b) => a-b)
  arr.forEach((item, index) => {
    flag = item == target[index]
  })
  return flag
}

//--------------------------------------------------

function rootDigit(n) {
	while (n.toString().length > 1) {
		n = Number(n.toString()
							 .split("")
							 .reduce((accum,item) => Number(accum)+Number(item), 0)
		);
	}
	return n;
}

//--------------------------------------------------



//--------------------------------------------------

function findAndRemove(obj) {
  result = {};
  for (let room in obj){
    result[room] = {};
    for (let item in obj[room]){
      if (Number(obj[room][item])){
        result[room][item] = Number(obj[room][item]);
      }
    }
  }
  return result;
}


//--------------------------------------------------

function getNotesDistribution(students) {
	const arr = students.map(obj => obj.notes).flat();
	const res = [];
	
	for(let i = 1; i <= 5; i++) {
		let ocr = arr.filter(n => n === i).length;
		if(ocr > 0)
			res.push([i, ocr]);
	}
	
	return Object.fromEntries(res);
}

//--------------------------------------------------

function findFrequent(arr) {
	let freq = 0;
	let temp;
	for(i = 0; i < arr.length; i++) {
		temp = arr.filter( elem => elem === arr[i]).length;
		if(temp > freq){
			freq = temp;
			ans = arr[i];
		}
	}
	return ans;
}


//--------------------------------------------------