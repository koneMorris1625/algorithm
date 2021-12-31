class Stack {
	/**
	 * With the push and pop methods being the only methods available for
	 * adding and removing items from the stack, the LIFO principle will
	 * apply to our own Stack class
	 */
	constructor() {
		this.items = [];
	}
	/**
	 * we can only add new items to the top of the stack, meaning at the end of the stack.
	 * @param {*} element Appends new elements to the end of an array, and you can add any element type to the stack IN JavaScript.
	 * @returns returns the new length of the array.
	 */
	push(elements) {
		return this.items.push(elements);
	}
	/**
	 * @returns Removes the last element from an array and returns it.
	 */
	pop() {
		return this.items.pop();
	}
	/**
	 *
	 * @returns the last element added to our stack
	 */
	peek() {
		return this.items[this.items.length - 1];
	}
	isEmpty() {
		return this.size() === 0;
	}
	size() {
		return this.items.length;
	}
	/**
	 * An alternative implementation would be calling the pop method until the stack is empty.
	 */
	clear() {
		this.items = [];
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