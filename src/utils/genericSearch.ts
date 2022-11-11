export default function genericSearch<T>(object: T, properties: Array<keyof T>, query: string): boolean {
  if (query === '') {
    return true;
  }
  
  const expression = properties.map(
    (property: keyof T) => {
      const value = object[property];
      
      if (typeof value === 'string' || typeof value === 'number') {
        return value.toString().toLowerCase().includes(query.toLowerCase());
      }

      return false;
    }
  )

  return expression.some((value: boolean) => value);
}