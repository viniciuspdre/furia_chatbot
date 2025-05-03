import { FURIA_TWITTER_ID } from "../constants/ids"
import { TweetData, TwitterApiResponse } from "../models/twitterPostModel";
import { axiosForTwitter } from "../utils/axiosInstace";


export const getLastestFuriaTweets = async (limit: number = 1): Promise<TweetData[] | null> => {
  try {
    const response = await axiosForTwitter.get<TwitterApiResponse>(`/users/${Number(FURIA_TWITTER_ID)}/tweets`, {
      params: {
        max_results: limit,
        "tweet.fields": ["id", "text", "created_at"]
      }
    });
  
    return response.data.data;
  } catch (error) {
    console.error('Erro ao buscar tweets:', error);
    return null;
  }
}