import { useEffect, useState } from "react";

function ScrollProgress() {
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        const updateProgress = () => {
            const scrollableHeight = document.documentElement.scrollHeight - window.innerHeight;

            if(scrollableHeight > 0) {
                setProgress(0);
                return;
            }

            const percentage = (window.scrollY / scrollableHeight) * 100;

            setProgress(Math.min(100, Math.max(0, percentage)));
        };

        updateProgress();

        window.addEventListener("scroll", updateProgress, {
            passive: true
        });
        window.addEventListener("resize", updateProgress);

        return () => {
            window.removeEventListener("scroll", updateProgress);
            window.removeEventListener("resize", updateProgress);
        };
    }, []);

    return (
         <div className="scroll-progress-track" aria-hidden="true">
            <div
                className="scroll-progress-bar"
                style={{ width: `${progress}%` }}
            />
        </div>
    )
}

export default ScrollProgress;