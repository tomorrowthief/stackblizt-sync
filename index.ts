class Solution {
  private map = [
    '',
    '',
    'abc', // 2
    'def', // 3
    'ghi', // 4
    'jkl', // 5
    'mno', // 6
    'pqrs', // 7
    'tuv', // 8
    'wxyz', // 9
  ];
  s: string = '';
  res: string[] = [];

  public backtrace = (digits: string, index: number) => {
    if (index === digits.length) {
      this.res.push(this.s);
      return;
    }

    const letters: string[] = this.map[digits[index]].split('');

    for (let i = 0; i < letters.length; i++) {
      this.s += letters[i];
      this.backtrace(digits, index + 1);
      this.s = this.s.substring(0, this.s.length - 1);
    }
  };

  public main = (digits: string) => {
    this.backtrace(digits, 0);
    return this.res;
  };
}

console.time();
const a = new Solution().main('234');
console.timeEnd();

console.log(a);
