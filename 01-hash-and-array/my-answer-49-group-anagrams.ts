///初回回答:妥当な開放が作成できず
// function groupAnagrams (strs: string[]): string[][] {

// }

//講義視聴後、下記のようなアプローチで実装
//キーをソート後の文字列、値をソート前の文字列配列とするmapを作成
//与えられた文字列配列ごとに、Mapの存在チェックし、なければmapに追加、
//最終的にMapのコレクションを返すようにするロジックを作成
// Runtime 114ms , Memory 62.28MB
function groupAnagrams (strs: string[]): string[][] {
  const mapAnagrams = new Map<string, string[]>()

  for (let str of strs) {
    const sorted = str.split('').sort().join()

    if (mapAnagrams.has(sorted)) {
      mapAnagrams.get(sorted)?.push(str)
    } else {
      mapAnagrams.set(sorted, [str])
    }
  }
  return Array.from(mapAnagrams.values())
}

//カウンター配列を作るアプローチ
//文字列が長すぎると、ソートロジックが重くなる
//ソートを行わず、文字列を1文字ずつ検証し、その文字列の出現回数を記録する
//出現文字と出現回数を組み合わせでキー、値を同一グループ文字列配列としていく
//出現文字を数えるために、アルファベットの文字数の大きさの初期0の配列を作成する
//アルファベットから、アルファベットの何番目の文字かを取得するには、文字コードを利用する
// Runtime 226ms ///Memory 67.06Mb
function groupAnagrams2 (strs: string[]): string[][] {
  const mapAnagrams = new Map<string, string[]>()

  for (let str of strs) {
    const counter = new Array(26).fill(0)
    for (let char of str) {
      const alphabetIndex = char.charCodeAt(0) - 'a'.charCodeAt(0)
      counter[alphabetIndex]++
    }

    //アルファベットカウンターをもとに、キー値を作成していく
    const key = counter
      .map((count, index) =>
        count > 0
          ? //キー用の文字列を文字コードより取得
            String.fromCharCode(index + 'a'.charCodeAt(0)) + counter
          : ''
      )
      .join()

    if (mapAnagrams.has(key)) {
      mapAnagrams.get(key)?.push(str)
    } else {
      mapAnagrams.set(key, [str])
    }
  }
  return Array.from(mapAnagrams.values())
}
