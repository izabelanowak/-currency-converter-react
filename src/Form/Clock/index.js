import { useEffect, useState } from "react";
import "./style.css";

const Clock = () => {
    const [actualDate, setActualDate] = useState(new Date());
    const stringDate = actualDate.toLocaleDateString(
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
        setInterval(() => {
            setActualDate(new Date());
        }, 1000);

        return () => {
            clearInterval(setActualDate);
        };
    }, []);

    return (
        <p className="clock">
            Dziś jest {stringDate}
        </p>

    )
};

export default Clock;