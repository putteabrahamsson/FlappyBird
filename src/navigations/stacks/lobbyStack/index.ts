import Game from '../../../views/Game';
import Lobby from '../../../views/Lobby';

import { Routes } from '../../routes';

export const lobbyStack = [
  {
    name: Routes.LOBBY_STACK,
    component: Lobby,
  },
  {
    name: Routes.GAME_STACK,
    component: Game,
  },
];
