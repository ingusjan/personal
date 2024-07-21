import { FC, useEffect, useState } from "react";
import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";
import timezone from "dayjs/plugin/timezone";

// Extend dayjs with timezone and UTC plugins
dayjs.extend(utc);
dayjs.extend(timezone);

interface CurrentTimeProps {
  timezone?: string;
}

const CurrentTime: FC<CurrentTimeProps> = ({ timezone }) => {
  const getTime = () => {
    return timezone
      ? dayjs().tz(timezone).format("HH:mm")
      : dayjs().format("HH:mm");
  };

  const [currentTime, setCurrentTime] = useState(getTime());

  useEffect(() => {
    const updateCurrentTime = () => {
      setCurrentTime(getTime());
    };

    const intervalId = setInterval(updateCurrentTime, 60000); // Update every minute

    // Update the time immediately when component mounts
    updateCurrentTime();

    // Cleanup interval on component unmount
    return () => clearInterval(intervalId);
  }, [timezone]);

  return <>{currentTime}</>;
};

export default CurrentTime;
