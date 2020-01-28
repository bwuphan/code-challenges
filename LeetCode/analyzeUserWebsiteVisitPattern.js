/*
https://leetcode.com/problems/analyze-user-website-visit-pattern/

We are given some website visits: the user with name username[i] visited the website website[i] at
time timestamp[i].

A 3-sequence is a list of websites of length 3 sorted in ascending order by the time of their
visits.  (The websites in a 3-sequence are not necessarily distinct.)

Find the 3-sequence visited by the largest number of users. If there is more than one solution,
return the lexicographically smallest such 3-sequence.



Example 1:

Input:
  username = ["joe","joe","joe","james","james","james","james","mary","mary","mary"],
  timestamp = [1,2,3,4,5,6,7,8,9,10],
  website = ["home","about","career","home","cart","maps","home","home","about","career"]
Output: ["home","about","career"]
Explanation:
The tuples in this example are:
["joe", 1, "home"]
["joe", 2, "about"]
["joe", 3, "career"]
["james", 4, "home"]
["james", 5, "cart"]
["james", 6, "maps"]
["james", 7, "home"]
["mary", 8, "home"]
["mary", 9, "about"]
["mary", 10, "career"]
The 3-sequence ("home", "about", "career") was visited at least once by 2 users.
The 3-sequence ("home", "cart", "maps") was visited at least once by 1 user.
The 3-sequence ("home", "cart", "home") was visited at least once by 1 user.
The 3-sequence ("home", "maps", "home") was visited at least once by 1 user.
The 3-sequence ("cart", "maps", "home") was visited at least once by 1 user.


Note:

3 <= N = username.length = timestamp.length = website.length <= 50
1 <= username[i].length <= 10
0 <= timestamp[i] <= 10^9
1 <= website[i].length <= 10
Both username[i] and website[i] contain only lowercase characters.
It is guaranteed that there is at least one user who visited at least 3 websites.
No user visits two websites at the same time.
*/

/**
 * @param {string[]} username
 * @param {number[]} timestamp
 * @param {string[]} website
 * @return {string[]}
 */
var mostVisitedPattern = function(username, timestamp, website) {

  /* First we need to create a map where the keys are the username and the values are an array of
     their visits. We will need this to map over and get their visit patterns. */
  const userMap = new Map();

  for (let i = 0; i < username.length; ++i) {
    const curUser = username[i];
    const curWebsite = website[i];
    const curTimestamp = timestamp[i];

    let websiteAndTimestamp = [];
    if (userMap.has(curUser)) {
      websiteAndTimestamp = userMap.get(curUser);
    }

    websiteAndTimestamp.push({
      website: curWebsite,
      timestamp: curTimestamp,
    });

    userMap.set(curUser, websiteAndTimestamp);

  }
  /* Create the visit map where the keys are the visit strings and the values are sets of users who
     share the same visits. */
  const visitUserMap = new Map();

  let highestOccurences = 0;
  let mostVisitedWebsite;

  /* Now, we loop through each user and sort their websiteAndTimestamp array ascending.
     We will then triple loop over and populate the users for the visit from the visitUserMap
     Then, last we will see if we have a new highest occurences/ most visited website.*/
  userMap.forEach((websiteAndTimestamp, user) => {
    websiteAndTimestamp = websiteAndTimestamp.sort((a, b) => a.timestamp - b.timestamp);

    for (let i = 0; i < websiteAndTimestamp.length; ++i) {
      for (let j = i + 1; j < websiteAndTimestamp.length; ++j) {
        for (let k = j + 1; k < websiteAndTimestamp.length; ++k) {
          const first = websiteAndTimestamp[i].website;
          const second = websiteAndTimestamp[j].website;
          const third = websiteAndTimestamp[k].website;

          const visits = `${first},${second},${third}`;

          let userSet = visitUserMap.get(visits);

          // If there is not yet a userSet for the visit, init a new set.
          if (!userSet) userSet = new Set();

          userSet.add(user);
          visitUserMap.set(visits, userSet);

          if (userSet.size > highestOccurences) {
            highestOccurences = userSet.size;
            mostVisitedWebsite = visits;
          }
          else if (userSet.size === highestOccurences) {
            mostVisitedWebsite = mostVisitedWebsite.localeCompare(visits) < 0 ? mostVisitedWebsite : visits;
          }
        }
      }
    }
  });

  return mostVisitedWebsite.split(',');
};

console.log(mostVisitedPattern(
  username = ["joe","joe","joe","james","james","james","james","mary","mary","mary"],
  timestamp = [1,2,3,4,5,6,7,8,9,10],
  website = ["home","about","career","home","cart","maps","home","home","about","career"]
))

console.log(mostVisitedPattern(
  ["u1","u1","u1","u2","u2","u2"],
  [1,2,3,4,5,6],
  ["a","b","c","a","b","a"]
))

console.log(mostVisitedPattern(
["h","eiy","cq","h","cq","txldsscx","cq","txldsscx","h","cq","cq"],
[527896567,334462937,517687281,134127993,859112386,159548699,51100299,444082139,926837079,317455832,411747930],
["hibympufi","hibympufi","hibympufi","hibympufi","hibympufi","hibympufi","hibympufi","hibympufi","yljmntrclw","hibympufi","yljmntrclw"]
))