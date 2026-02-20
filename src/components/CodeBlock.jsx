'use client'
import { motion, useAnimation } from "framer-motion";
import { useEffect, useState, useRef } from "react";

const getSyntaxHighlighting = (line, apiORres = 'api') => {
    const keywords = [
        "import", "from", "const", "require", "new", "var", "using",
        "public", "string", "def", "class", "end", "main", "func", "cURL"
    ];

    const regex = /'[^']*'|"[^"]*"|\b(import|from|const|require|new|var|using|public|string|def|class|end|main|func|cURL)\b/g;

    let processedLine = line.replace(regex, (match) => {
        if (apiORres === 'res') {
            if (match === `"ErrorCode"` || match === `"Message"` || match === `"Description"`) return `<span class="text-purple-400">${match}</span>`;
            return `<span class="text-green-400">${match}</span>`;
        } else {
            if (match.startsWith('"') || match.startsWith("'")) {
                return `<span class="text-green-400">${match}</span>`;
            } else {
                return `<span class="text-purple-400">${match}</span>`;
            }
        }
    });

    return <span dangerouslySetInnerHTML={{ __html: processedLine }} />;
};

const CodeBlock = ({ text, apiORres }) => {
    const [visibleText, setVisibleText] = useState('');
    const controls = useAnimation();
    const [isInView, setIsInView] = useState(false);
    const ref = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(([entry]) => {
            if (entry.isIntersecting) {
                setIsInView(true);
                controls.start({ opacity: 1, transition: { duration: 0 } });
            }
        }, { threshold: 0.1 });

        if (ref.current) observer.observe(ref.current);

        return () => {
            if (ref.current) observer.unobserve(ref.current);
        };
    }, [controls]);

    useEffect(() => {
        if (!isInView) return;

        setVisibleText('');
        let currentIndex = 0;
        let animationFrameId;

        const animateText = () => {
            if (currentIndex < text.length) {
                setVisibleText(text.slice(0, currentIndex + 1));
                currentIndex++;
                animationFrameId = requestAnimationFrame(animateText);
            }
        };

        animationFrameId = requestAnimationFrame(animateText);

        return () => {
            cancelAnimationFrame(animationFrameId);
        };
    }, [text, isInView]);

    return (
        <pre ref={ref}>
            <motion.div initial={{ opacity: 0 }} animate={controls}>
                {getSyntaxHighlighting(visibleText, apiORres)}
            </motion.div>
        </pre>
    );
};

export default CodeBlock;
