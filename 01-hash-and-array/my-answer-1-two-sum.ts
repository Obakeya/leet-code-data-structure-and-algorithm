//レクチャー確認後:HashMapを作成して、期待を満たす補数が存在するかどうかを検証する
//期待を満たす補数の存在が確認できたらreturnする
function twoSum2 (nums: number[], target: number): number[] {
  // 数値とそのインデックスを紐付けるためのMapを用意
  const numToIndex = new Map<number, number>()
  for (let i = 0; i < nums.length; i++) {
    let complement = target - nums[i]

    if (numToIndex.has(complement)) {
      return [i, numToIndex.get(complement)!]
    }
    numToIndex.set(nums[i], i)
  }
  return []
}

//自分の初回の回答
//与えられた数字の配列を先頭から調査し、先頭以降の数字と検証する
//一度比較したペアを検証しないように気をつける
//加算の前からtargetの数字より大きい場合は次の検証に進む
function twoSum (nums: number[], target: number): number[] {
  const numsLength = nums.length
  for (let i = 0; i < numsLength; i++) {
    for (let j = i + 1; j < numsLength; j++) {
      if (nums[i] + nums[j] === target) {
        return [i, j]
      }
    }
  }
  return []
}
