import { useEffect, useRef, memo, useCallback } from 'react'; 
import lottie, { AnimationItem } from 'lottie-web'; 
import { useInView } from 'react-intersection-observer';
 
interface AnimProps { 
  className?: string; 
  anim: string; 
  render?: 'canvas' | 'svg' | 'html';
} 
 
const Anim: React.FC<AnimProps> = ({ className = '', anim, render = 'canvas' }) => { 
  const containerRef = useRef<HTMLDivElement | null>(null);
  const animationRef = useRef<AnimationItem | null>(null);
  const { ref, inView } = useInView({ threshold: 0.2, triggerOnce: false }); 
 
  const setRefs = useCallback( 
    (node: HTMLDivElement | null) => { 
      ref(node); // Привязываем useInView 
      containerRef.current = node; // Безопасно обновляем ref 
    }, 
    [ref] 
  ); 
 
  useEffect(() => { 
    if (!containerRef.current) return;
    //1-3 меняет количество кадров lottie.setQuality(3);

    //уничтожаем старую анимацию
    animationRef.current?.destroy();
 
    animationRef.current = lottie.loadAnimation({ 
      container: containerRef.current, 
      renderer: render, 
      loop: true, 
      autoplay: false, // Отключаем автостарт 
      path: anim, 
      rendererSettings: { 
        progressiveLoad: true, 
        scaleMode: 'exactFit',
        preserveAspectRatio: 'xMidYMid meet',//для рендера svg
        redundantFrames: true,
      }, 
    });
 
    return () => {
      animationRef.current?.destroy();
      animationRef.current = null;
    };
  }, [anim, render]);

  useEffect(() => {
    if (animationRef.current) {
      if (inView) {
        animationRef.current?.play();
      } else {
        animationRef.current?.pause();
      }
    }
  }, [inView]);
 
  return <div ref={setRefs} className={className} />; 
}; 
 
export default memo(Anim);