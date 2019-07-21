/**
 * @param {number[][]} points
 * @param {number} K
 * @return {number[][]}
 */
var kClosest = function(points, K) {
  var calcDist = (point) => Math.sqrt(point[0]*point[0] + point[1]*point[1]);

  let distArr = points.map(point => {
    return {
      point: point,
      distance : calcDist(point)
    };
  });

  return distArr.sort((a, b) => a.distance - b.distance).slice(0, K).map(pointObj => pointObj.point);
};

console.log(kClosest([[1,3],[-2,2]], 1))