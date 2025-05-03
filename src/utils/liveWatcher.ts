

const watchers = new Map<number, NodeJS.Timeout>();

export const startWatcher = async (chatId: number, callback: () => void): Promise<boolean> => {
  if (watchers.has(chatId)) return false;

  const interval = setInterval(callback, 2*60*1000); // chamo uma funcao de callback a cada 2 min
  watchers.set(chatId, interval);
  return true;
}

export const stopWatcher = async (chatId: number): Promise<boolean> => {
  const interval = watchers.get(chatId); // pego o intervalo para poder dar clear
  if (interval) {
    clearInterval(interval);
    watchers.delete(chatId);
    return true;
  }
  return false;
}

export const isWatching = async (chatId: number): Promise<boolean> => {
  return watchers.has(chatId);
}