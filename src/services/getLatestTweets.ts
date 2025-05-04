import { FURIA_TWITTER_ID } from "../constants/ids"
import { FIFTEEN_MINUTES_IN_MS } from "../constants/time";
import { TweetData, TwitterApiResponse } from "../models/twitterPostModel";
import { axiosForTwitter } from "../utils/axiosInstace";

let cachedFuriaTweets: TweetData[] | null = null;
let cacheExpirationTime: number = 0;

export const getLastestFuriaTweets = async (limit: number = 1): Promise<TweetData[] | null> => {

  const now = new Date();
  const nowMilisseconds = now.getMilliseconds();
  if (cachedFuriaTweets && nowMilisseconds < cacheExpirationTime) {
    console.log(`[Cache Twitter] Servindo timeline da FURIA do cache. Expira em: ${((cacheExpirationTime - nowMilisseconds) / 1000 / 60).toFixed(1)} min`);
    return cachedFuriaTweets;
  }

  console.log("[Cache Twitter] Cache expirado ou vazio. Buscando dados frescos da API do Twitter...");

  try {
    const response = await axiosForTwitter.get<TwitterApiResponse>(`/users/${Number(FURIA_TWITTER_ID)}/tweets`);

    const freshTweets = response.data.data;

    if (freshTweets) {
      cachedFuriaTweets = freshTweets;
      cacheExpirationTime = nowMilisseconds + FIFTEEN_MINUTES_IN_MS;
      console.log(`[Cache Twitter] Timeline da FURIA cacheada. Expira em: ${new Date(cacheExpirationTime).toLocaleTimeString()}`);
    }
    
    return freshTweets;
  } catch (error) {
    console.error('Erro ao buscar tweets:', error);
    return null;
  }
}