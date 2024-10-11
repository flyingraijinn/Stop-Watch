import { useEffect, useState } from "react";

const Stopwatch = () => {
    const [time, setTime] = useState(0);
    const [timerOn, setTimerOn] = useState(false);

    useEffect(() => {
        let interval = null;
        if (timerOn) {
            interval = setInterval(() => {
                setTime(prevTime => prevTime + 10);
            }, 10);
        } else {
            clearInterval(interval);
        }
        return () => clearInterval(interval);
    }, [timerOn]);

    const handleStart = () => {
        setTimerOn(true);
    };

    const handleStop = () => {
        setTimerOn(false);
    };

    const handleResume = () => {
        setTimerOn(true);
    };

    const handleReset = () => {
        setTimerOn(false);
        setTime(0);
    };

    return (
        <div className="w-[500px] h-auto bg-white rounded-lg text-center p-5  justify-between">
            <span className="text-5xl">{(time / 1000).toFixed(2)}s</span>
            <div className="flex-col items-center space-y-4">
                <button
                    className="bg-green-400 py-2 px-4 rounded-xl hover:bg-green-500 hover:text-white duration-300 hover:scale-105 font-semibold mx-4"
                    onClick={handleStart}
                    disabled={timerOn}
                >
                    Start
                </button>
                <button
                    className="bg-green-400 py-2 px-4 rounded-xl hover:bg-green-500 hover:text-white duration-300 hover:scale-105 font-semibold mx-4"
                    onClick={handleStop}
                    disabled={!timerOn}
                >
                    Stop
                </button>
                <button
                    className="bg-green-400 py-2 px-4 rounded-xl hover:bg-green-500 hover:text-white duration-300 hover:scale-105 font-semibold mx-4"
                    onClick={handleResume}
                    disabled={timerOn}
                >
                    Resume
                </button>
                <button
                    className="bg-green-400 py-2 px-4 rounded-xl hover:bg-green-500 hover:text-white duration-300 hover:scale-105 font-semibold mx-4"
                    onClick={handleReset}
                >
                    Reset
                </button>
            </div>
        </div>
    );
};

export default Stopwatch;
