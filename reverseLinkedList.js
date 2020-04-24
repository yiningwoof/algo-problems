var reverseList = function (head) {
  let tmpNode = null;
  let newList = null;
  //console.log("BF HEAD",head)
  while (head !== null) {
    tmpNode = head;
    head = head.next;
    tmpNode.next = newList;
    newList = tmpNode;

    console.log("HEAD", head);
  }
  //console.log("HEAD",head)
  //console.log("tmpNode",tmpNode)
  return newList;
};

reverseList([1, 2, 3, 4, 5]);
