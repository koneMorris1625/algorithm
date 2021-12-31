class Stack {
	/**
	 * we could access the element directly, use
	 * less memory space, and still have all the elements organized the
	 * way we need to.
	 *
	 * use a `count` property to help us keep track of the size of the stack
	 */
	constructor() {
		this.count = 0;
		this.items = {};
	}
	/**
	 * we can only add new items to the top of the stack, meaning at the end of the stack.
	 *
	 * In JavaScript, an object is a set of key and value pairs. To add an element to the stack, we will use the count variable as the key of the items object and the element will be its value. After pushing the element to the stack, we increment the count.
	 * @param {*} element Appends new elements to the end of an array, and you can add any element type to the stack IN JavaScript.
	 * @returns returns the new length of the array.
	 */
	push(elements) {
		this.items[this.count++] = elements;
		return this.count;
	}
	/**
	 * As we are not using an array to store the elements, we will need to implement the logic to remove an element manually.
	 * @returns Removes the last element from an array and returns it.
	 */
	pop() {
		if (this.isEmpty()) {
			return undefined;
		}
		this.count--;
		const deleteElement = this.items[this.count];
		delete this.items[this.count];
		return deleteElement;
	}
	/**
	 *
	 * @returns the last element added to our stack
	 */
	peek() {
		if (this.isEmpty()) {
			return undefined;
		}
		return this.items[this.count - 1];
	}
	isEmpty() {
		return this.size() === 0;
	}
	size() {
		return this.count;
	}
	clear() {
		this.items = {};
		this.count = 0;
		// * An alternative implementation would be calling the pop method until the stack is empty.
		// while (!this.isEmpty()) {
		// 	this.pop();
		// }
	}
	/**
	 * In the array version, we do not need to worry about a toString method because the data structure will use the one already provided by the array
	 * @returns Stack to String 
	 */
	toString() {
		if (this.isEmpty()) {
			return "";
		}
		let objString = this.items[0];
		// If the stack contains only one element, the code below will not be executed
		for (let i = 1; i < this.size(); i++) {
			objString = "${objString}, ${this.item[i]}";
		}
		return objString;
	}
}

let stack = new Stack();
console.log(stack);
console.log(stack.isEmpty());
let arr = [1, 2, 3];
stack.push(1);
stack.push("2");
stack.push(arr);
console.log(stack.size());
console.log(stack.peek());
console.log(stack);
console.log(stack.pop());
console.log(stack.pop());

// TODO: weakMap || symbol protect private attributes