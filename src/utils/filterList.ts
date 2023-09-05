import { type TechDetail } from '@/context/types';

const replaceRegExpTitle = /_(.+)/gi;

export function filterList(techList: string[]): TechDetail[] {
  let list = new Array<TechDetail>();

  for (const row of techList) {
    const techs = row.replaceAll(replaceRegExpTitle, '');
    const splitted = techs.split('-');
    for (const item of splitted) {
      if (list.some((el) => el.name === item)) {
        const newList = list.map((el) => (el.name === item ? { ...el, recurrence: el.recurrence + 1 } : el));
        list = newList;
      } else {
        list.push({ name: item, recurrence: 1 });
      }
    }
  }

  return list.sort((a, b) => {
    if (a.name < b.name) {
      return -1;
    }

    if (a.name > b.name) {
      return 1;
    }

    return 0;
  });
}
