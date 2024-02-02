export const createLocal = (key, val) => {
  return localStorage.setItem(key, JSON.stringify(val));
}

export const readLocal = (key) => {
  return localStorage.getItem(JSON.parse(key));
}

export const updateLocal = (key) => {

}

export const removeLocal = (key) => {

}