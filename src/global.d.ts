declare module 'lottie-web' {
    export interface AnimationItem {
      play(): void;
      stop(): void;
      pause(): void;
      destroy(): void;
      setSpeed(speed: number): void;
      setDirection(direction: number): void;
      playSegments(segments: [number, number] | [number, number][], forceFlag?: boolean): void;
      goToAndStop(value: number, isFrame?: boolean): void;
      goToAndPlay(value: number, isFrame?: boolean): void;
    }
  
    export interface AnimationConfig {
      container: Element;
      renderer: 'svg' | 'canvas' | 'html';
      loop: boolean | number;
      autoplay: boolean;
      animationData?: object;
      path?: string;
      rendererSettings?: object;
    }
  
    export function loadAnimation(params: AnimationConfig): AnimationItem;
  }
  