import { FaUser, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

export const ContactDetailConfig = {
  title: "Get in Touch",
  paragraph: "Want to know more? Don't hesitate to mail me.",
  details: [
    { title: "name", content: "Chukwuemeka Duruji", icon: <FaUser /> },
    {
      title: "address",
      content: "No. 4 Kinsasha street, Zone 6 Wuse, Abuja.",
      icon: <FaMapMarkerAlt />,
    },
    {
      title: "email",
      content: "obioha.duruji@gmail.com",
      icon: <FaEnvelope />,
    },
  ],
};
