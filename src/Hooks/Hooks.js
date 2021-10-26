import { useState, useEffect, useRef } from "react";

function Clock() {
  const [time, setTime] = useState(() => new Date());
  const intervalId = useRef(null);

  useEffect(() => {
    intervalId.current = setInterval(() => {
      setTime(new Date());
    }, 1000);
  }, []);

  const stop = () => {
    clearInterval(intervalId.current);
  };
}
Clock();

export default function SingUpForm() {
  const [email, setEmail] = useState(() => {
    return JSON.parse(window.localStorage.getItem("email")) ?? "";
  });
  const [password, setPassword] = useState(() => {
    return JSON.parse(window.localStorage.getItem("password")) ?? "";
  });

  useEffect(() => {
    window.localStorage.setItem("password", JSON.stringify(email));
  }, [email]);

  useEffect(() => {
    window.localStorage.setItem("password", JSON.stringify(password));
  }, [password]);

  const handleChange = (event) => {
    // const { name, value } = event.target;

    switch (event.target.name) {
      case "email":
        setEmail(event.target.value);
        break;

      case "password":
        setPassword(event.target.value);
        break;

      default:
        return;
    }
  };
}
