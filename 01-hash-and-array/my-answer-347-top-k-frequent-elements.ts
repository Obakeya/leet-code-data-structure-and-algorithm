///レクチャーを確認後、実装した

//バケットを使う
//キーを数値、値を出現回数とするHashMapを作成する
//与えられた数値の数分だけ、ループをして、ハッシュマップの値をカウントアップ
//ハッシュマップから、バゲットを作成
//要素の多い順に、値を抽出する（要素のかずが　インデックスになっている）
function topKFrequent (nums: number[], k: number): number[] {
  const counterMap = new Map<number, number>()
  const bucketMap = new Map<number, number[]>()
  const result: number[] = []

  //カウンターを作成
  nums.forEach(num => counterMap.set(num, (counterMap.get(num) ?? 0) + 1))

  //バケットを作成する
  let maxCount = 1
  counterMap.forEach((count, number) => {
    if (!bucketMap.has(count)) {
      bucketMap.set(count, [])
    }
    bucketMap.get(count)?.push(number)

    if (maxCount < count) {
      maxCount = count
    }
  })

  //最も出現数が多い要素から順にk個を抽出する
  let indexCount = maxCount
  while (indexCount > 0 && result.length < k) {
    const getArrays = bucketMap.get(indexCount)
    if (getArrays) {
      result.push(...getArrays)
    }

    if (result.length >= k) {
      break
    }

    indexCount--
  }

  return result.slice(0, k)
}
