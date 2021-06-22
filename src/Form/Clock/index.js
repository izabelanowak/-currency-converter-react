import { useEffect, useState } from "react";
import "./style.css";

const Clock = () => {
    const [currentDate, setCurrentDate] = useState(new Date());
    const stringDate = currentDate.toLocaleDateString(
        undefined,
        {
            weekday: "long",
            day: "numeric",
            month: "long",
            year: "numeric",
            hour: "numeric",
            minute: "numeric",
            second: "numeric",
        },
    );

    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentDate(new Date());
        }, 1000);

        return () => {
            clearInterval(intervalId);
        };
    }, []);

    return (
        <p className="clock">
            Dziś jest {stringDate}
        </p>
    )
};

export default Clock;