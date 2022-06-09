export const apiURL = 'http://localhost:8000/';

export function generateURL(path: string) {
  return apiURL + path;
}
