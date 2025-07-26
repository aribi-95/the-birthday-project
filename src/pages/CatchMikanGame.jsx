import React, { useState, useEffect, useRef } from "react";
import mikanImg from "../assets/mikan.png";
import vomitImg from "../assets/vomit.png";

const CatchMikanGame = () => {
    const [mikanPos, setMikanPos] = useState({ x: 50, y: 50 });
    const [isCaught, setIsCaught] = useState(false);
    const [vomits, setVomits] = useState([]);
    const [timeLeft, setTimeLeft] = useState(5);
    const [resetCounter, setResetCounter] = useState(0); // forza il remount dei timer

    const mikanPosRef = useRef(mikanPos);
    const moveInterval = useRef(null);
    const timerInterval = useRef(null);

    const gameWidth = window.innerWidth * 0.95;
    const gameHeight = window.innerHeight * 0.9;

    const centerZone = {
        xMin: gameWidth / 2 - 50,
        xMax: gameWidth / 2 + 50,
        yMin: gameHeight / 2 - 50,
        yMax: gameHeight / 2 + 50,
    };

    // Aggiorna la ref ogni volta che Mikan si muove
    useEffect(() => {
        mikanPosRef.current = mikanPos;
    }, [mikanPos]);

    useEffect(() => {
        // Pulizia intervalli precedenti
        clearInterval(moveInterval.current);
        clearInterval(timerInterval.current);

        // Funzione movimento
        const moveMikanRandomly = () => {
            const goToCenter = Math.random() < 0.3;
            const x = goToCenter
                ? centerZone.xMin +
                  Math.random() * (centerZone.xMax - centerZone.xMin)
                : Math.random() * (gameWidth - 100);
            const y = goToCenter
                ? centerZone.yMin +
                  Math.random() * (centerZone.yMax - centerZone.yMin)
                : Math.random() * (gameHeight - 100);
            setMikanPos({ x, y });
        };

        // Movimento iniziale
        moveMikanRandomly();

        // Muovi Mikan ogni mezzo secondo
        moveInterval.current = setInterval(() => {
            if (!isCaught) moveMikanRandomly();
        }, 500);

        // Timer per il vomito
        timerInterval.current = setInterval(() => {
            setTimeLeft((prev) => {
                if (isCaught) return prev;
                if (prev <= 1) {
                    // Aggiungi un nuovo vomito alla posizione attuale
                    const { x, y } = mikanPosRef.current;
                    setVomits((old) => [...old, { x, y }]);
                    return 5; // reset timer
                }
                return prev - 1;
            });
        }, 1000);

        // Cleanup quando cambia qualcosa o smonti
        return () => {
            clearInterval(moveInterval.current);
            clearInterval(timerInterval.current);
        };
    }, [isCaught, gameWidth, gameHeight, resetCounter]);

    const handleCatch = () => {
        if (
            mikanPos.x > centerZone.xMin &&
            mikanPos.x < centerZone.xMax &&
            mikanPos.y > centerZone.yMin &&
            mikanPos.y < centerZone.yMax
        ) {
            setIsCaught(true);
            clearInterval(moveInterval.current);
            clearInterval(timerInterval.current);
        }
    };

    const resetGame = () => {
        setIsCaught(false);
        setVomits([]);
        setTimeLeft(5);
        setResetCounter((c) => c + 1); // forza il riavvio dei useEffect
    };

    return (
        <div
            className="game-container"
            style={{ width: `${gameWidth}px`, height: `${gameHeight}px` }}
        >
            <h1 className="title">Catch Mikan!</h1>
            {!isCaught && (
                <p className="timer">He&apos;ll vomit in... {timeLeft}</p>
            )}

            <div
                className="center-zone"
                style={{
                    left: centerZone.xMin,
                    top: centerZone.yMin,
                    width: centerZone.xMax - centerZone.xMin,
                    height: centerZone.yMax - centerZone.yMin,
                }}
            />

            <img
                src={mikanImg}
                alt="Mikan"
                className="mikan"
                style={{
                    left: mikanPos.x,
                    top: mikanPos.y,
                }}
            />

            {vomits.map((v, i) => (
                <div
                    key={i}
                    className="vomit"
                    style={{ left: v.x + 40, top: v.y + 40 }}
                >
                    <img src={vomitImg} alt="vomit" />
                </div>
            ))}

            {isCaught && (
                <div className="caught-message">
                    You caught Mikan! 🎉 <br /> No more vomiting today!
                    <button className="play-again-button" onClick={resetGame}>
                        Play Again
                    </button>
                </div>
            )}

            {!isCaught && (
                <button className="catch-button" onClick={handleCatch}>
                    Catch Mikan
                </button>
            )}
        </div>
    );
};

export default CatchMikanGame;
