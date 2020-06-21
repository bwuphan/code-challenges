/*
https://leetcode.com/problems/reconstruct-itinerary/

Share
Given a list of airline tickets represented by pairs of departure and arrival
airports [from, to], reconstruct the itinerary in order. All of the tickets
belong to a man who departs from JFK. Thus, the itinerary must begin with JFK.

Note:

If there are multiple valid itineraries, you should return the itinerary that
has the smallest lexical order when read as a single string. For example, the
itinerary ["JFK", "LGA"] has a smaller lexical order than ["JFK", "LGB"].

All airports are represented by three capital letters (IATA code).
You may assume all tickets form at least one valid itinerary.
Example 1:

Input: [["MUC", "LHR"], ["JFK", "MUC"], ["SFO", "SJC"], ["LHR", "SFO"]]
Output: ["JFK", "MUC", "LHR", "SFO", "SJC"]
Example 2:

Input: [["JFK","SFO"],["JFK","ATL"],["SFO","ATL"],["ATL","JFK"],["ATL","SFO"]]
Output: ["JFK","ATL","JFK","SFO","ATL","SFO"]
Explanation: Another possible reconstruction is ["JFK","SFO","ATL","JFK","ATL","SFO"].
             But it is larger in lexical order.
*/

/**
 * @param {string[][]} tickets
 * @return {string[]}
 */
var findItinerary = function(tickets) {
  // Create an object where the key is the airport and the key is an array
  // of tickets that start in that airport sorted by alphabetical order.
  const flights = {};
  tickets.forEach((ticket, i) => {
    const start = ticket[0];
    const end = ticket[1];

    if (start in flights) {
      flights[start].push(i);
      flights[start].sort((a, b) => {
        if (tickets[a][1] < tickets[b][1]) return -1;
        if (tickets[a][1] > tickets[b][1]) return 1;
        return 0;
      });
    }
    else
      flights[start] = [i];
  });

  // Create a set to keep track of already visited tickets.
  const visited = new Set();
  // Total number of places in the final array.
  const totPlaces = tickets.length + 1;
  let results = null;

  const dfs = (ticketIdx, curItinerary, length) => {
    // If we already have a result, return out to avoid doing extra calculations
    // we don't need.
    if (results)
      return;

    const ticket = tickets[ticketIdx];
    if (!ticket)
      return;
    else {
      // Add the next destination to the itin.
      curItinerary = `${curItinerary},${ticket[1]}`;

      // If we have the length that matches total places, we are done.
      if (length + 1 === totPlaces) {
        if (!results)
          results = curItinerary;
        return;
      }

      // Add the current ticket to visited.
      visited.add(ticketIdx);

      if (flights[ticket[1]]) {
        // Loop through the airport array and recurse.
        flights[ticket[1]].forEach(idx => {
          if (!visited.has(idx) && !results)
            dfs(idx, curItinerary, length + 1);
        });
      }
      visited.delete(ticketIdx);

    }
  }


  for (let i = 0; i < flights.JFK.length; ++i) {
    dfs(flights.JFK[i], 'JFK', 1);
    if (results) {
      return results.split(',')
    }
  }
};


/*
  Solution:
  Create a object that maps airports as keys and tickets associated as key.
  We're going to loop through to find a solution by backtracking and dfs.
*/


// console.log(findItinerary([["JFK","SFO"],["JFK","ATL"],["SFO","ATL"],["ATL","JFK"],["ATL","SFO"]]));
// console.log(findItinerary([["MUC", "LHR"], ["JFK", "MUC"], ["SFO", "SJC"], ["LHR", "SFO"]]));
// console.log(findItinerary([["JFK","KUL"],["JFK","NRT"],["NRT","JFK"]]))
// console.log(findItinerary([["EZE","AXA"],["TIA","ANU"],["ANU","JFK"],["JFK","ANU"],["ANU","EZE"],["TIA","ANU"],["AXA","TIA"],["TIA","JFK"],["ANU","TIA"],["JFK","TIA"]]))
console.log(findItinerary([["AXA","EZE"],["EZE","AUA"],["ADL","JFK"],["ADL","TIA"],["AUA","AXA"],["EZE","TIA"],["EZE","TIA"],["AXA","EZE"],["EZE","ADL"],["ANU","EZE"],["TIA","EZE"],["JFK","ADL"],["AUA","JFK"],["JFK","EZE"],["EZE","ANU"],["ADL","AUA"],["ANU","AXA"],["AXA","ADL"],["AUA","JFK"],["EZE","ADL"],["ANU","TIA"],["AUA","JFK"],["TIA","JFK"],["EZE","AUA"],["AXA","EZE"],["AUA","ANU"],["ADL","AXA"],["EZE","ADL"],["AUA","ANU"],["AXA","EZE"],["TIA","AUA"],["AXA","EZE"],["AUA","SYD"],["ADL","JFK"],["EZE","AUA"],["ADL","ANU"],["AUA","TIA"],["ADL","EZE"],["TIA","JFK"],["AXA","ANU"],["JFK","AXA"],["JFK","ADL"],["ADL","EZE"],["AXA","TIA"],["JFK","AUA"],["ADL","EZE"],["JFK","ADL"],["ADL","AXA"],["TIA","AUA"],["AXA","JFK"],["ADL","AUA"],["TIA","JFK"],["JFK","ADL"],["JFK","ADL"],["ANU","AXA"],["TIA","AXA"],["EZE","JFK"],["EZE","AXA"],["ADL","TIA"],["JFK","AUA"],["TIA","EZE"],["EZE","ADL"],["JFK","ANU"],["TIA","AUA"],["EZE","ADL"],["ADL","JFK"],["ANU","AXA"],["AUA","AXA"],["ANU","EZE"],["ADL","AXA"],["ANU","AXA"],["TIA","ADL"],["JFK","ADL"],["JFK","TIA"],["AUA","ADL"],["AUA","TIA"],["TIA","JFK"],["EZE","JFK"],["AUA","ADL"],["ADL","AUA"],["EZE","ANU"],["ADL","ANU"],["AUA","AXA"],["AXA","TIA"],["AXA","TIA"],["ADL","AXA"],["EZE","AXA"],["AXA","JFK"],["JFK","AUA"],["ANU","ADL"],["AXA","TIA"],["ANU","AUA"],["JFK","EZE"],["AXA","ADL"],["TIA","EZE"],["JFK","AXA"],["AXA","ADL"],["EZE","AUA"],["AXA","ANU"],["ADL","EZE"],["AUA","EZE"]]));