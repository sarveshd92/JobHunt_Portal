import { createContext } from "react";

const use_user_info = createContext({
    user: "Guest",
    bio: "An enthusiastic learner eager to explore and innovate.",
    userdata:"",
});
export default use_user_info;