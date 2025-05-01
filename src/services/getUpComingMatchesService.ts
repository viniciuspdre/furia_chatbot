import { PANDASCORE_FURIA_ID } from "../constants/ids";
import { axiosInstance } from "../utils/axiosInstace";

export const upComingFuriaMatches = async (limit: number) => {
  try {
    const response = await axiosInstance.get<any[]>("/matches/upcoming", {
      params: {
        sort: "begin_at",
        page: 1,
        per_page: 50,
      },
    });

    console.log(`O pandaScore encontrou partidas`)

    const upComingMatches = response.data
      .filter(
        (match) =>
          match.status === "not_started" &&
          match.opponents?.some((op: any) => op.opponent.id === PANDASCORE_FURIA_ID)
      )
      .slice(0, limit);

    return upComingMatches.map((match) => {
      const teamA = match.opponents?.[0]?.opponent?.name || "TBD";
      const teamB = match.opponents?.[1]?.opponent?.name || "TBD";
      const beginAt = new Date(match.begin_at).toLocaleString("pt-BR", {
        timeZone: "America/Sao_Paulo",
        dateStyle: "short",
        timeStyle: "short",
      });
      const tournament = match.league?.name || "Campeonato desconhecido";

      return `🏆 *${tournament}*\n🗓️ ${beginAt}\n🎮 *${teamA}* vs *${teamB}*\n`;
    });
  } catch (error) {
    console.error(`[PandaScore] Erro ao buscar próximas partidas:`, error);
    return null;
  }
};