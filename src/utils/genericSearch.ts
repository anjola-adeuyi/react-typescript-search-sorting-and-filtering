export default function genericSearch<T>(object: T, property: keyof T, query: string): boolean {
  const value = object[property];
  if (query === '') {
    return true;
  }
  if (typeof value === 'string' || typeof value === 'number') {
    return value.toString().toLowerCase().includes(query.toLowerCase());
  }
  return false;
}