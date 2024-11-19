import {
  Routes,
} from "discord-api-types/v10";

export function getRoute(channelId: string): string {
  return Routes.channel(channelId);
}
