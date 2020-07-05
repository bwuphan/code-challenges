/*
https://leetcode.com/problems/design-in-memory-file-system/

Design an in-memory file system to simulate the following functions:

ls: Given a path in string format. If it is a file path, return a list that only contains this
file's name. If it is a directory path, return the list of file and directory names in this
directory. Your output (file and directory names together) should in lexicographic order.

mkdir: Given a directory path that does not exist, you should make a new directory according to the
path. If the middle directories in the path don't exist either, you should create them as well. This
function has void return type.

addContentToFile: Given a file path and file content in string format. If the file doesn't exist,
you need to create that file containing given content. If the file already exists, you need to
append given content to original content. This function has void return type.

readContentFromFile: Given a file path, return its content in string format.



Example:

Input:
["FileSystem","ls","mkdir","addContentToFile","ls","readContentFromFile"]
[[],["/"],["/a/b/c"],["/a/b/c/d","hello"],["/"],["/a/b/c/d"]]

Output:
[null,[],null,null,["a"],"hello"]

Explanation:
filesystem


Note:

You can assume all file or directory paths are absolute paths which begin with / and do not end
with / except that the path is just "/".

You can assume that all operations will be passed valid parameters and users will not attempt to
retrieve file content or list a directory or file that does not exist.

You can assume that all directory names and file names only contain lower-case letters, and same
names won't exist in the same directory.

*/

class Directory {
  constructor(name) {
    this.name = name;
    this.files = new Map();
    this.subDirectories = new Map();
  }

  getSubDirectory(dirName) {
    return this.subDirectories.get(dirName);
  }

  getFile(fileName) {
    return this.files.get(fileName);
  }

  // getFiles() {
  //   return this.letter;
  // }


  // addChild(node) {
  //   this.children.set(node.getLetter(), node);
  // }

  // getChild(letter) {
  //   return this.children.get(letter);
  // }
}

class Trie {
  constructor() {
    this.root = new Directory('/');
  }

  insert(path, fileContent) {
    let fileName = null;
    // If fileContent is truthy or a blank string, we are adding a new file.
    if (fileContent || fileContent === '') {
      path = path.split('/');
      fileName = path.pop();
      path = path.reverse();
    }
    else
      path = path.split('/').reverse();

    let curDir = this.root;

    for (let i = path.length - 1; i >= 0; --i) {
      const dir = path[i];
      if (dir) {
        const nextDir = curDir.getSubDirectory(dir);

        if (nextDir)
          curDir = nextDir;
        else {
          curDir.subDirectories.set(dir, new Directory(dir));
          curDir = curDir.subDirectories.get(dir);
        }
      }
    }

    if (fileName) {
      if (curDir.files.has(fileName)) {
        curDir.files.set(fileName, curDir.files.get(fileName) + fileContent);
      }
      else {
        curDir.files.set(fileName, fileContent);
      }
    }
  }

  getDirectory(path) {
    path = path.split('/').reverse();

    let curDir = this.root;

    for (let i = path.length - 1; i >= 0; --i) {
      const dir = path[i];
      if (dir)
        curDir = curDir.getSubDirectory(dir);
    }

    return curDir;
  }

  getFile(path, fileName) {
    return this.getDirectory(path).getFile(fileName);
  }
}


var FileSystem = function() {
  this.fs = new Trie();
};

/**
 * @param {string} path
 * @return {string[]}
 */
FileSystem.prototype.ls = function(path) {
  const dir = this.fs.getDirectory(path);
  if (!dir) {
    path = path.split('/');
    let fileName = null;
    while (!fileName) {
      fileName = path.pop();
    }
    const file = this.fs.getFile(path.join('/'), fileName);
    if (file)
      return [fileName];
    else
      return [];
  }
  else
    return Array.from(dir.subDirectories.keys()).concat(Array.from(dir.files.keys())).sort();
};

/**
 * @param {string} path
 * @return {void}
 */
FileSystem.prototype.mkdir = function(path) {
  this.fs.insert(path);
};

/**
 * @param {string} filePath
 * @param {string} content
 * @return {void}
 */
FileSystem.prototype.addContentToFile = function(filePath, content) {
  this.fs.insert(filePath, content);
};

/**
 * @param {string} filePath
 * @return {string}
 */
FileSystem.prototype.readContentFromFile = function(filePath) {
  const path = filePath.split('/');
  const fileName = path.pop();
  return this.fs.getFile(path.join('/'), fileName);
};

/**
 * Your FileSystem object will be instantiated and called as such:
 * var obj = new FileSystem()
 * var param_1 = obj.ls(path)
 * obj.mkdir(path)
 * obj.addContentToFile(filePath,content)
 * var param_4 = obj.readContentFromFile(filePath)
 */

// let fs = new FileSystem();
// console.log(fs.ls('/'));
// console.log(fs.mkdir("/a/b/c"));
// console.log(fs.addContentToFile("/a/b/c/d","hello"));
// console.log(fs.ls('/'));
// console.log(fs.readContentFromFile("/a/b/c/d"));


["FileSystem","mkdir","ls","ls","mkdir","ls","ls","addContentToFile","ls","ls","ls"]
[[],["/goowmfn"],["/goowmfn"],["/"],["/z"],["/"],["/"],["/goowmfn/c","shetopcy"],["/z"],["/goowmfn/c"],["/goowmfn"]]

let fs2 = new FileSystem();
console.log(fs2.mkdir('/goowmfn'));
console.log(fs2.ls('/goowmfn'));
console.log(fs2.ls('/'))
console.log(fs2.mkdir('/z/'));
console.log(fs2.ls('/'));
console.log(fs2.ls('/'));
console.log(fs2.addContentToFile("/goowmfn/c","shetopcy"))
console.log(fs2.ls('/z'))
console.log(fs2.ls('/goowmfn/c/'));
console.log(fs2.ls('/goowmfn'));