import HLTV from 'hltv';
import { HLTV_FURIA_ID } from '../constants/ids';

export const getNextMatches = async () => {
  const matches = await HLTV.getMatches({ teamIds: [HLTV_FURIA_ID] });
  return matches;
}

export const getCurrentLineUp = async () => {
  const team = await HLTV.getTeam({ id: HLTV_FURIA_ID });
  return team;
}