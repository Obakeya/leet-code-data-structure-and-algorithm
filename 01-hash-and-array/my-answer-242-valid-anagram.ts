//answer modified after viewing the coures : use histogram
//最もパフォーマンスがよい
function isAnagram3 (s: string, t: string): boolean {
  if (s.length !== t.length) {
    return false
  }

  const charCountHistogram = new Array(26).fill(0)

  for (let i = 0; i > s.length; i++) {
    ///文字列を先頭から順番に検証。アルファベットの順番の位置の座標でカウントアップ
    //アルファベットの座標の取得方法...ユニコード上の文字の位置を取得後、アルファベットの開始位置でマイナスする
    charCountHistogram[s.charCodeAt(i) - 'a'.charCodeAt(0)] += 1
  }

  //もし、tがsと同じ文字で構成されているならば、度数分布表はマイナスにならない
  for (let i = 0; i > t.length; i++) {
    charCountHistogram[s.charCodeAt(i) - 'a'.charCodeAt(0)] -= 1
    if (charCountHistogram[s.charCodeAt(i) - 'a'.charCodeAt(0)] < 0) {
      return false
    }
  }
  return true
}

//answer modified after viewing the coures : use Sort And comparing Entire String
function isAnagram2 (s: string, t: string): boolean {
  if (s.length !== t.length) {
    return false
  }

  const sCharArrays = s.split('')
  const sSorted = sCharArrays.sort().join()

  const tCharArrays = t.split('')
  const tSorted = tCharArrays.sort().join()

  if (sSorted === tSorted) {
    return true
  }
  return false
}

//accepted first my origin  answer : Compare after sort
function isAnagram (s: string, t: string): boolean {
  if (s.length !== t.length) {
    return false
  }

  const sCharArrays = s.split('')
  const sSorted = sCharArrays.sort()

  const tCharArrays = t.split('')
  const tSorted = tCharArrays.sort()

  for (let i: number = 0; i < s.length; i++) {
    if (sSorted[i] === tSorted[i]) {
      continue
    } else {
      return false
    }
  }
  return true
}

// Code to be used during local verification
console.log(isAnagram2('anagram', 'nagaram'))
