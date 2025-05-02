import { PANDASCORE_FURIA_ID } from "../constants/ids";
import { axiosForPandaScore } from "../utils/axiosInstace";

export const liveFuriaMatch = async () => {
  try {
    const response = await axiosForPandaScore.get<any[]>("/matches/running", {
      params: {
        per_page: 50,
      },
    });

    const furiaLiveMatch = response.data.find((match) =>
      match.opponents?.some((op: any) => op.opponent.id === PANDASCORE_FURIA_ID)
    );

    if (!furiaLiveMatch) return null;

    const teamA = furiaLiveMatch.opponents?.[0]?.opponent?.name || "TBD";
    const teamB = furiaLiveMatch.opponents?.[1]?.opponent?.name || "TBD";
    const scores = furiaLiveMatch.results || [];
    const scoreA = scores[0]?.score ?? 0;
    const scoreB = scores[1]?.score ?? 0;
    const tournament = furiaLiveMatch.league?.name || "Campeonato desconhecido";
    const status = furiaLiveMatch.status;

    return `🔥 *Partida AO VIVO*\n🏆 ${tournament}\n🎮 *${teamA}* vs *${teamB}*\n📊 Placar: ${scoreA} - ${scoreB}\n📡 Status: ${status}`;
  } catch (error) {
    console.error("Erro ao buscar partidas ao vivo:", error);
    return null;
  }
};