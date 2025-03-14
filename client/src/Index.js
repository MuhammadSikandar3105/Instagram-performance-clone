import React from "react";

const Home = React.lazy(() => import("./components/organisms/Main/Home"));
const About = React.lazy(() => import("./components/pages/About"));
const Contact = React.lazy(() => import("./components/pages/Contact"));
const Login = React.lazy(() => import("./components/pages/Login"));
const Signup = React.lazy(() => import("./components/pages/Signup"));

export { Home, About, Contact, Login, Signup };