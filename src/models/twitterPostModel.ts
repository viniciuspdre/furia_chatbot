

export interface TweetData {
  id: string;
  text: string;
  edit_history_tweet_ids: string[];
}

interface MetaData {
  next_token?: string;
  result_count: number;
  newest_id: string;
  oldest_id: string;
}

export interface TwitterApiResponse {
  data: TweetData[];
  meta: MetaData;
}