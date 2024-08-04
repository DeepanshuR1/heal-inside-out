"use client";
import React from "react";
import { Classes } from "../components";
import JoinForm from "../components/JoinForm";

const JoinPage = () => {
  return (
    <div className=" main-content">
      <section>
        <h1> Join Yoga Bliss</h1>
        {/* <Classes /> */}
        <JoinForm />
      </section>
    </div>
  );
};

export default JoinPage;
