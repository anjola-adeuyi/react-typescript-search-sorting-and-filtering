export default function genericSearch<T>(object: T, properties: Array<keyof T>, query: string, shouldBeCaseSensitive: boolean): boolean {
  if (query === '') {
    return true;
  }

  return properties.some(
    (property: keyof T) => {
      const value = object[property];

      if (typeof value === 'string' || typeof value === 'number') {
        if (shouldBeCaseSensitive) {
          return value.toString().includes(query);
        } else {
          return value.toString().toLowerCase().includes(query.toLowerCase());
        }
      }

      return false;
    }
  )

  // return expression.some((value: boolean) => value);
}