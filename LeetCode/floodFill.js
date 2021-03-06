/*
https://leetcode.com/problems/flood-fill/

An image is represented by a 2-D array of integers, each integer representing the pixel value of the
image (from 0 to 65535).

<<<<<<< HEAD
Given a coordinate (sr, sc) representing the starting pixel (row and column) of the flood fill,
and a pixel value newColor, "flood fill" the image.

To perform a "flood fill", consider the starting pixel, plus any pixels connected 4-directionally
to the starting pixel of the same color as the starting pixel, plus any pixels connected 4-
directionally to those pixels (also with the same color as the starting pixel), and so on.
Replace the color of all of the aforementioned pixels with the newColor.
=======
Given a coordinate (sr, sc) representing the starting pixel (row and column) of the flood fill, and
a pixel value newColor, "flood fill" the image.

To perform a "flood fill", consider the starting pixel, plus any pixels connected 4-directionally
to the starting pixel of the same color as the starting pixel, plus any pixels connected 4-
directionally to those pixels (also with the same color as the starting pixel), and so on. Replace
the color of all of the aforementioned pixels with the newColor.
>>>>>>> 8cd285687fa78b745bed5ffef69307a8e9cf3831

At the end, return the modified image.

Example 1:
Input:
image = [[1,1,1],[1,1,0],[1,0,1]]
sr = 1, sc = 1, newColor = 2
Output: [[2,2,2],[2,2,0],[2,0,1]]
Explanation:
From the center of the image (with position (sr, sc) = (1, 1)), all pixels connected
by a path of the same color as the starting pixel are colored with the new color.
Note the bottom corner is not colored 2, because it is not 4-directionally connected
to the starting pixel.
Note:

The length of image and image[0] will be in the range [1, 50].
The given starting pixel will satisfy 0 <= sr < image.length and 0 <= sc < image[0].length.
The value of each color in image[i][j] and newColor will be an integer in [0, 65535].
*/


/**
 * @param {number[][]} image
 * @param {number} sr
 * @param {number} sc
 * @param {number} newColor
 * @return {number[][]}
 */
var floodFill = function(image, sr, sc, newColor) {
  const curColor = image[sr][sc];

  // If the current color is the same as the new color, don't do anything and return.
  if (curColor === newColor)
    return image;

  const changeColor = (r, c) => {
    // If out of bounds, return.
    if (r < 0 || r > image.length - 1 || c < 0 || c > image[0].length)
      return;

    // If the current element is not the same as the current color, return.
    if (image[r][c] !== curColor)
      return;

    image[r][c] = newColor;

    changeColor(r - 1, c);
    changeColor(r + 1, c);
    changeColor(r, c - 1);
    changeColor(r, c + 1);
  }

  changeColor(sr, sc);

  return image;
};

console.log(floodFill(image = [[1,1,1],[1,1,0],[1,0,1]], sr = 1, sc = 1, newColor = 2))
