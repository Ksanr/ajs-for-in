export default function orderByProps(obj, sortOrder) {
  const keys = [];
  // Сначала добавляем ключи из sortOrder, если они есть в объекте
  for (const key of sortOrder) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      keys.push(key);
    }
  }
  // Затем добавляем остальные ключи (которые не в sortOrder)
  const remainingKeys = [];
  for (const key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key) && !sortOrder.includes(key)) {
      remainingKeys.push(key);
    }
  }
  remainingKeys.sort(); // сортируем по алфавиту
  keys.push(...remainingKeys);

  // Формируем результат
  return keys.map(key => ({ key, value: obj[key] }));
}