import { useEffect, useState } from "react";
import { ClockContainer } from "./styled.js";

const formatDate = (date) => date.toLocaleDateString(
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

const Clock = () => {
    const [currentDate, setCurrentDate] = useState(new Date());

    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentDate(new Date());
        }, 1000);

        return () => {
            clearInterval(intervalId);
        };
    }, []);

    return (
        <ClockContainer>
            Dziś jest {formatDate(currentDate)}
        </ClockContainer>
    )
};

export default Clock;