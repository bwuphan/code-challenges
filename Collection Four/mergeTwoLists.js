var mergeTwoLists = function(l1, l2) {
  if (l1 === null) return l2;
  else if (l2 === null) return l1;
  else if (l1.val < l2.val) {
    l1.next = mergeTwoLists(l1.next, l2);
    return l1;
  } else {
    l2.next = mergeTwoLists(l1, l2.next);
    return l2;
  }
}

// var mergeTwoLists = function(l1, l2) {
//   if (!l1 && !l2) return null;
//   if (!l1) return l2;
//   if (!l2) return l1;

//   var firstNode = l1.val <= l2.val ? l1 : l2;
//   var merge = function(l1, l2) {
//     if (!l1 || !l2) return;

//     let l1Temp = null;
//     let l2Temp = null;
//     if (!l1.next && !l2.next) {
//       if (l1.val <= l2.val) l1.next = l2;
//       else l2.next = l1;
//       return;
//     }
//     if (l1.next <= l2.val) {
//       return merge(l1, l2.next);
//     } else  if (l2.next < l1.val) {
//       return merge(l1.next, l2);
//     }
//     if (l1.val <= l2.val) {
//       l1Temp = l1.next;
//       l2Temp = l2;
//       l1.next = l2;
//     } else {
//       l1Temp = l1;
//       l2Temp = l2.next;
//       l2.next = l1;
//       console.log('l2', l1Temp, l2Temp, l2.next.val)
//     }
//     console.log('FIRST NODE', JSON.stringify(firstNode));
//     return merge(l1Temp, l2Temp);
//   }
//   merge(l1, l2);
//   return firstNode;
// };

// const l1 = {
//   val: 1,
//   next: {
//     val: 2,
//     next: {
//       val: 4,
//       next: null
//     }
//   }
// }

// const l2 = {
//   val: 1,
//   next: {
//     val: 3,
//     next: {
//       val: 4,
//       next: null
//     }
//   }
// }

// console.log(JSON.stringify(mergeTwoLists(l1, l2)));

const l2 = {
  val: 1,
  next: {
    val: 3,
    next: {
      val: 4,
      next: null
    }
  }
}

const l1 = {
  val: 1,
  next: {
    val: 2,
    next: {
      val: 4,
      next: null
    }
  }
}

console.log(JSON.stringify(mergeTwoLists(l1, l2)));