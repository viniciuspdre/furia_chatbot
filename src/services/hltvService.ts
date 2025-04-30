import HLTV from 'hltv';

const FURIA_ID = 8297;

export const getNextMatches = async () => {
  const matches = await HLTV.getMatches({ teamIds: [FURIA_ID] });
  return matches;
}

export const getCurrentLineUp = async () => {
  const team = await HLTV.getTeam({ id: FURIA_ID })
  return team;
}