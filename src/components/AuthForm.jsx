import axios from "axios";
import { useNavigate } from "react-router";
import { useAppContext } from "../context/appContext";

export default function AuthForm() {
  const { setIsAuth, showToast, showAlert, setIsLoading } = useAppContext();

  const navigate = useNavigate();
  function submitHandler(e) {
    e.preventDefault();
    setIsLoading(true);
    const emailInput = e.target.email.value;
    const passwordInput = e.target.password.value;
    axios
      .post("http://localhost:3001/api/auth/login", {
        email: emailInput,
        password: passwordInput,
      })
      .then((x) => {
        if (x.data.token) {
          console.log(x.data.token);

          // save token to LS
          localStorage.setItem("userToken", JSON.stringify(x.data.token));

          setIsAuth(true);
          showToast("Welcome to you Event App!");

          setIsLoading(false);
          navigate("/create-event");
        }
      })
      .catch((e) => {
        showAlert("Email or password is not valid!");
        console.log("Hi folks");
        console.log("Error ");
      });
  }
  return (
    <div className="h-full  flex justify-center items-center  w-full bg-gray-300">
      <form onSubmit={submitHandler}>
        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
          <label className="label">Email</label>
          <input
            type="email"
            className="input"
            placeholder="Email"
            name="email"
          />

          <label className="label">Password</label>
          <input
            type="password"
            className="input"
            placeholder="Password"
            name="password"
          />

          <button className="btn btn-neutral mt-4">Login</button>
          <p>you can create your account now...</p>
        </fieldset>
      </form>
    </div>
  );
}
