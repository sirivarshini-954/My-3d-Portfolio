"use client";
import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import { Toaster, toast } from "sonner";
import { motion } from "framer-motion";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
      delayChildren: 0.2,
    },
  },
};

const item = {
  hidden: { scale: 0 },
  show: { scale: 1 },
};

export default function Form() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState({ message: "" });

  const sendEmail = (params: any) => {
    console.log("params", params);
    const toastId = toast.loading("Sending your message, please wait...");
    emailjs
      .send(
        process.env.NEXT_PUBLIC_SERVICE_ID!,
        process.env.NEXT_PUBLIC_TEMPLATE_ID!,
        params,
        {
          publicKey: process.env.NEXT_PUBLIC_PUBLIC_KEY!,
          limitRate: {
            throttle: 10000, // you can not send more then 1 email per 5 seconds
          },
        }
      )
      .then(
        () => {
          toast.success(
            "I have received your message, I will get back to you soon!",
            {
              id: toastId,
            }
          );
        },
        (error) => {
          console.log("error", error);
          toast.error(
            "There was an error sending your message, please try again later!",
            {
              id: toastId,
            }
          );
        }
      );
  };

  const onSubmit = () => {
    event!.preventDefault();

    if (!name || !email || !message) {
      setErrors({ message: "Please fill all the fields" });
      return;
    }

    if (message.length < 50) {
      setErrors({ message: "Message should be more than 50 characters" });
      return;
    }

    if (message.length > 500) {
      setErrors({ message: "Message should be less than 500 characters" });
      return;
    }

    const templateParams = {
      to_name: "Siri Varshini",
      from_name: name,
      reply_to: email,
      message: message,
    };

    sendEmail(templateParams);

    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <>
      <Toaster richColors={true} />
      <motion.form
        variants={container}
        initial="hidden"
        animate="show"
        onSubmit={onSubmit}
        className="max-w-lg w-full flex flex-col items-center justify-center space-y-4 "
      >
        <motion.input
          variants={item}
          type="text"
          placeholder="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full p-2 rounded-md shadow-lg text-foreground focus:outline-none focus:ring-2 focus:ring-accent/50 custom-bg"
        />
        <motion.input
          variants={item}
          type="email"
          placeholder="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full p-2 rounded-md shadow-lg text-foreground focus:outline-none focus:ring-2 focus:ring-accent/50 custom-bg"
        />
        <motion.textarea
          variants={item}
          placeholder="message"
          rows={5}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="w-full p-2 rounded-md shadow-lg text-foreground focus:outline-none focus:ring-2 focus:ring-accent/50 custom-bg"
        />
        {errors && (
          <span className="inline-block self-start text-accent">
            {errors.message}
          </span>
        )}

        <motion.input
          variants={item}
          value="Cast your message!"
          className="px-10 py-4 rounded-md shadow-lg bg-background border border-accent/30 border-solid
      hover:shadow-glass-sm backdrop-blur-sm text-foreground focus:outline-none focus:ring-2 focus:ring-accent/50 cursor-pointer capitalize
      "
          type="submit"
        />
      </motion.form>
    </>
  );
}
