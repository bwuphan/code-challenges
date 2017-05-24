function DoublyLinkedList() {
	this.head = null;
	this.tail = null;
}

DoublyLinkedList.prototype.addToTail = function(val) {
	const newTail = this.makeNode(val);
	if (!this.head) {
		this.head = newTail;
	} else {
		this.tail.next = newTail
		newTail.previous = this.tail;
	}
	this.tail = newTail;
}

DoublyLinkedList.prototype.removeHead = function() {
	const newHead = this.head.next;
	newHead.previous = null;
	this.head = newHead;
}

DoublyLinkedList.prototype.contains = function(val) {
	let node = this.head;
	while (node.next) {
		if (node.value === val) {
			return true;
		}
		node = node.next;
	}
	return false;
}

DoublyLinkedList.prototype.makeNode = function(val) {
	return {
		value: val,
		previous: null,
		next: null,
	}
}

let test = new DoublyLinkedList();
test.addToTail(1);
test.addToTail(2);
test.addToTail(3);
test.removeHead();

console.log(test);