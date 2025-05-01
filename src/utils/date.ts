const now = new Date();

export const getCurrentMonth = async(): Promise<string> => {
  const month: number = now.getMonth();
  let monthWord: string = '';
  switch(month)
  {
    case 0:
      monthWord = 'january';
      break;
    case 1:
      monthWord = 'february';
      break;
    case 2:
      monthWord = 'march';
      break;
    case 3:
      monthWord = 'april';
      break;
    case 4:
      monthWord = 'may';
      break;
    case 5:
      monthWord = 'june';
      break;
    case 6:
      monthWord = 'july';
      break;
    case 7:
      monthWord ='august';
      break;
    case 8:
      monthWord = 'september';
      break;
    case 9:
      monthWord = 'october';
      break;
    case 10:
      monthWord = 'november';
      break;
    case 11:
      monthWord = 'december';
      break;
  }

  return monthWord;
}

export const getCurrentDay = async (): Promise<number> => {
  return now.getDay();
}

export const getCurrentYear = async (): Promise<number> => {
  return now.getFullYear();
}