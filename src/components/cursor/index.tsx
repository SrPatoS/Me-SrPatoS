import React, { useEffect, useRef } from 'react';

const CustomCursor: React.FC = () => {
    const cursorRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        if (cursorRef.current === null) return;

        document.addEventListener('mousemove', (e) => {
            if (cursorRef.current === null) return;

            cursorRef.current.style.top = e.pageY + 'px';
            cursorRef.current.style.left = e.pageX + 'px';
        });

        document.addEventListener('click', () => {
            if (cursorRef.current === null) return;

            cursorRef.current.classList.add('expand');

            setTimeout(() => {
                if (cursorRef.current === null) return;

                cursorRef.current.classList.remove('expand');
            }, 500);
        });

        return () => {
            document.removeEventListener('mousemove', (e) => {
                if (cursorRef.current === null) return;

                cursorRef.current.style.top = e.pageY + 'px';
                cursorRef.current.style.left = e.pageX + 'px';
            });

            document.removeEventListener('click', () => {
                if (cursorRef.current === null) return;

                cursorRef.current.classList.add('expand');

                setTimeout(() => {
                    if (cursorRef.current === null) return;

                    cursorRef.current.classList.remove('expand');
                }, 500);
            });
        };
    }, []);

    return (
        <div className="cursor" ref={cursorRef}>
            <div className="inner-cursor"></div>
        </div>
    );
};

export default CustomCursor;
