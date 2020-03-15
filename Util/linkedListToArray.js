function linkedListToArray(head) {
  let curNode = head;
  const returnArray = [];

  while (curNode) {
    if (curNode)
      returnArray.push(curNode.val);

    curNode = curNode.next;
  }

  return returnArray
}

module.exports = {
  linkedListToArray,
}