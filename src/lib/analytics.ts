import ReactGA from "react-ga4";

export const track_schedule_a_call = () => {
  ReactGA.event({
    category: "lead",
    action: "schedule_a_call_clicked",
  });
};

export const track_linkedin_connect = () => {
  ReactGA.event({
    category: "lead",
    action: "linkedin_connect_clicked",
  });
};
