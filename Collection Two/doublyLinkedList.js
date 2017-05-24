function DoublyLinkedList() {
	this.head = null;
	this.tail = null;
}

DoublyLinkedList.prototype.addToTail = function(val) {

}

DoublyLinkedList.prototype.makeNode = function(val) {
	const node = {
		value: val,
		previous: null,
		next: null,
	}
}