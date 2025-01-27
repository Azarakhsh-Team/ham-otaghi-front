const persianIndexTexts: Map<number, string> = new Map([
  [0, 'اول'],
  [1, 'دوم'],
  [2, 'سوم'],
  [3, 'چهارم'],
  [4, 'پنجم'],
  [5, 'ششم'],
  [6, 'هفتم'],
  [7, 'هشتم'],
  [8, 'نهم'],
  [9, 'دهم'],
  [10, 'یازدهم'],
  [11, 'دوازدهم'],
  [12, 'سیزدهم'],
  [13, 'چهاردهم'],
  [14, 'پانزدهم'],
  [15, 'شانزدهم'],
  [16, 'هفدهم'],
  [17, 'هجدهم'],
  [18, 'نوزدهم'],
  [19, 'بیستم'],
]);

export const translateIndexToPersianText = (index: number): string => {
  return persianIndexTexts.get(index) || '';
};
