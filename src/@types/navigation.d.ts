interface GameInterface {
  gameOptions: {
    layoutSize: number;
    itemsNum: number;
    timeView: number;
  };
}

export declare global {
  namespace ReactNavigation {
    interface RootParamList {
      Home: undefined;
      GameConfig: undefined;
      Game: GameInterface;
      HowToPlay: undefined;
      AppConfig: undefined;
    }
  }
}

export type ParamList = {
  Game: GameInterface;
};
