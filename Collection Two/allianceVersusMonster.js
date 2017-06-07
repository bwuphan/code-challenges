// You and your alliance of warriors are trying to kill a monster to score points in a Kingdom vs. Kingdom (KvK) event. Each unit (both a warrior and a monster are considered a unit) has a certain number of health points (healthPoints) and attack damage value (attackDamage). When one unit attacks another, the health of the unit that is under attack is decreased by the attacker's damage value. If a unit's health points are reduced to zero or less, the unit dies and can't take part in the battle anymore.

// The skirmish between the warrior alliance and the monster proceeds in the following way:

// Each turn, you direct one of your warriors to attack the monster.
// If the monster dies, you win.
// If the monster is still alive after an attack, it counter-attacks the same warrior who attacked it in the previous step.
// If all of your warriors die, you lose.
// Find the maximum number of your warriors that will remain after defeating the monster. If it's impossible to kill a monster without losing all your warriors, return 0.

// Example

// For healthPoints = [110, 30, 50] and attackDamage = [12, 11, 20], the output should be
// allianceVersusMonster(healthPoints, attackDamage) = 2.

// One of the optimal strategies is as follows:

// Attack the monster four times with the second warrior. The monster's health will become 110 - 20 * 4 = 30, while the warrior's health will be 50 - 12 * 4 = 2.
// If you use the second warrior again immediately, it will die. Therefore, use the first warrior instead. Its three attacks will deplete the monster's health by 11 * 3 = 33 points, while the monster will respond only twice. After the third attack it will die instantly. Your first warrior's health will be 30 - 12 * 2 = 6 after the fight ends.
// In this way you are able to save both of your warriors and win the battle.
// For healthPoints = [4, 10, 10, 10] and attackDamage = [10, 1, 1, 1], the output should be
// allianceVersusMonster(healthPoints, attackDamage) = 0.

// Each of your warriors will be able to attack the monster only once because they will die after one counter-attack. Each of the attacks will reduce the monster's health by 1. Thus, after three turns, the monster will still have 1 health point but all of your warrior will be dead.

// Input/Output

// [time limit] 4000ms (js)
// [input] array.integer healthPoints

// Array of at least two positive integers. healthPoints[0] corresponds to the monster's health, while all the following elements refer to warriors of the alliance.

// Guaranteed constraints:
// 2 ≤ healthPoints.length ≤ 30,
// 1 ≤ healthPoints[i] ≤ 2 · 109 + 1.

// [input] array.integer attackDamage

// Array of the same length as healthPoints, consisting of positive integers. attackDamage[0] equals the monster's attack damage, while all the following elements refer to warriors of the alliance.

// Guaranteed constraints:
// 2 ≤ attackDamage.length ≤ 30,
// 1 ≤ attackDamage[i] ≤ 100.

// [output] integer

// The maximum number of your warriors that will remain after defeating the monster, or 0 if it's impossible to kill a monster without losing all your warriors.

function allianceVersusMonster(healthPoints, attackDamage) {

}
