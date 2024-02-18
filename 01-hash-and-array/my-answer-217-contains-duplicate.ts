//accepted first my origin  answer : use Set
//answer modified after viewing the coures : No changes
function containsDuplicate (nums: number[]): boolean {
  const numberSets = new Set<number>()
  for (const num of nums) {
    const exist = numberSets.has(num)
    if (exist) {
      return true
    } else {
      numberSets.add(num)
    }
  }
  return false
}
