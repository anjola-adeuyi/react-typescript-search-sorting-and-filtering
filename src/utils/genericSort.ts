export type TAscOrDesc = 'asc' | 'desc';

export default function genericSort<T>(a: T, b: T, property: keyof T, ascOrDesc: TAscOrDesc): number {
    if (ascOrDesc === 'asc') {
      if (a[property] < b[property]) {
        return -1;
      }
      if (a[property] > b[property]) {
        return 1;
      }
      return 0;
    } else {
      if (a[property] < b[property]) {
        return 1;
      }
      if (a[property] > b[property]) {
        return -1;
      }
      return 0;
    }
}
