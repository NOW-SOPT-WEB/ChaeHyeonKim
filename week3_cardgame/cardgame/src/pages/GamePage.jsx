import React, { useEffect, useState } from 'react';
import CardHandler from '../components/card/CardHandler';
import Header from '../components/header/Header';
import LevelHandler from '../components/level/LevelHandler';
import SuccessModal from '../components/modal/SuccessModal';

export default function GamePage() {
    const [score, setScore] = useState(0);
    const [level, setLevel] = useState(5);
    const [modalOpen, setModalOpen] = useState(false);

    // 점수 업데이트
    const updateScore = (newScore) => {
        setScore(newScore);
    };
    // 난이도 업데이트
    const updateLevel = (level) => {
        setLevel(level);
    };
    // 게임 리셋
    const resetGame = () => {
        setLevel(5);
        setScore(0);
    };

    const closeModal = () => {
        setModalOpen(false);
        resetGame();
    };

    // 난이도 변경 시 점수 리셋
    useEffect(() => {
        setScore(0);
    }, [level]);

    // 난이도 변경 시 점수 리셋
    useEffect(() => {
        if (score === level) {
            setModalOpen(true);
        }
    }, [score]);

    return (
        <>
            <Header score={score} level={level} resetGame={resetGame} />
            <LevelHandler updateLevel={updateLevel} />
            <CardHandler level={level} updateScore={updateScore} />
            <SuccessModal isOpen={modalOpen} onClose={closeModal} />
        </>
    );
}
