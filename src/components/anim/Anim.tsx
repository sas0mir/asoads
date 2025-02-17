import { useEffect, useRef, memo, useCallback } from 'react'; 
import lottie from 'lottie-web'; 
import { useInView } from 'react-intersection-observer'; 
 
interface AnimProps { 
  className?: string; 
  anim: string; 
  render?: 'canvas' | 'svg' | 'html'; 
} 
 
const Anim: React.FC<AnimProps> = ({ className = '', anim, render = 'canvas' }) => { 
  const containerRef = useRef<HTMLDivElement | null>(null); 
  const { ref, inView } = useInView({ threshold: 0.2 }); 
 
  const setRefs = useCallback( 
    (node: HTMLDivElement | null) => { 
      ref(node); // Привязываем useInView 
      containerRef.current = node; // Безопасно обновляем ref 
    }, 
    [ref] 
  ); 
 
  useEffect(() => { 
    if (!containerRef.current) return; 
 
    const animation = lottie.loadAnimation({ 
      container: containerRef.current, 
      renderer: render, 
      loop: true, 
      autoplay: false, // Отключаем автостарт 
      path: anim, 
      rendererSettings: { 
        progressiveLoad: true, 
        scaleMode: 'exactFit', 
      }, 
    }); 
 
    if (inView) { 
      requestAnimationFrame(() => animation.play()); 
    } else { 
      animation.pause(); 
    } 
 
    return () => animation.destroy(); 
  }, [anim, render, inView]); 
 
  return <div ref={setRefs} className={className} />; 
}; 
 
export default memo(Anim);