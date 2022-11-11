export interface IFooBar {
    foo: string;
    bar: string;
}

const fooBars: Array<IFooBar> = [
    { foo: 'foo', bar: 'bar' },
    { foo: 'foo 2', bar: 'bar 2' },
    { foo: 'foo 3', bar: 'bar 3' },
];

function sortByFoo(fooBars: Array<IFooBar>): Array<IFooBar> {
    return fooBars.sort((a, b) => a.foo.localeCompare(b.foo));
}

function sortByBar(fooBars: Array<IFooBar>): Array<IFooBar> {
    return fooBars.sort((a, b) => {
      if (a.bar < b.bar) {
        return -1;
      }
      if (a.bar > b.bar) {
        return 1;
      }
      return 0;
    });
}

console.log(sortByFoo(fooBars));
console.log(sortByBar(fooBars));