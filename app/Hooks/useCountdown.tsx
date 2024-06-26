import React, { useState, useEffect} from 'react'

/**
 * 
 * @param initialTime initial countdown timer in ms
 * @param interval executed function whenever timer reaches 0
 * @param callback optional
 */

export const useCountdown = (initialTime:number, callback: () => void, interval = 1000) => {
    const [time, setTime] = useState(initialTime);

    useEffect(() => {
        const customInterval = setInterval(() => {
            if (time > 0) setTime((prev) => prev-interval)
        }, interval)

        if (time === 0) callback()

        return() => clearInterval(customInterval)
    }, [time])

    return time;
    
}

export default useCountdown
