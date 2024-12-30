"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import Close from "../../public/icons/x close no.svg";
import google from "../../public/icons/google.svg";
import Apple from "../../public/icons/icon.svg";
import Facebook from "../../public/icons/facebook.svg";
import classes from "./signin.module.css";
import { useRouter } from "next/navigation";

function Signin({ show, onClose, children }) {
  useEffect(() => {
    document.body.style.overflow = show ? "hidden" : "auto";
  }, [show]);
  const router = useRouter();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const res = await fetch("/api/auth/signin", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email: formData.email,
        password: formData.password,
      }),
    });

    const data = await res.json();

    if (data.success) {
      localStorage.setItem("token", data.token);
      setSuccessMessage("Login successful!");
      setTimeout(() => {
        router.push("/payment");
      }, 3000);
    } else {
      setError(data.message);
    }
  };
  if (!show) return null;
  return (
    <>
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
        <div className="" onClick={(e) => e.stopPropagation()}>
          <button
            className="absolute top-2 right-2 text-gray-600"
            onClick={onClose}
          ></button>
          {children}
        </div>

        <div className={classes.content}>
          <div className="flex justify-between">
            <h1 className={classes.header_title}>Sign In for Tripma</h1>
            <button onClick={onClose}>
              <Image src={Close} alt="Close" width={32} height={32} />
            </button>
          </div>
          <p className={classes.header_description}>
            Tripma is totally free to use. Sign In using your email address or
            phone number below to get started.
          </p>
          <form action="" onClick={handleSubmit}>
            <div className="grid mt-5">
              <input
                type="email"
                placeholder="Email or phone number"
                className={classes.input}
                name="email"
                value={formData.email}
                onChange={handleChange}
              />
              <input
                type="password"
                placeholder="Password"
                className={classes.input}
                name="password"
                value={formData.password}
                onChange={handleChange}
              />
            </div>
            {error ? (
              <p className="text-red-600">{error}</p>
            ) : (
              successMessage && (
                <p className="text-green-600">{successMessage}</p>
              )
            )}
            <div className={classes.container_button}>
              <button className={classes.button}>Sign In</button>
            </div>
            <div className="flex items-center mt-7 mb-7 gap-2 w-full">
              <hr className={classes.divider} />
              <h3 className={classes.divider_text}>or</h3>
              <hr className={classes.divider} />
            </div>
            <div>
              <button className={classes.social_button}>
                <Image src={google} alt="google" width={18} height={18} />
                <h3 className={classes.social_text}>Continue with Google</h3>
              </button>
            </div>
            <div>
              <button className={classes.social_button}>
                <Image src={Apple} alt="Apple" width={18} height={18} />
                <h3 className={classes.social_text}>Continue with Apple</h3>
              </button>
            </div>
            <div>
              <button className={classes.social_button}>
                <Image src={Facebook} alt="Facebook" width={18} height={18} />
                <h3 className={classes.social_text}>Continue with Facebook</h3>
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default Signin;
