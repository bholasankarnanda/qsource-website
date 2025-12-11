import Elevating from "@/components/OurServices/Elevating";
import SmoothSailing from "@/components/OurServices/SmoothSailing";
import Synergizing from "@/components/OurServices/Synergizing";
import WhyChoose from "@/components/OurServices/WhyChoose";
import { Divider } from "@mui/material";
import React from "react";

const page = () => {
  return (
    <div>
      <Synergizing />
      <br />
      <Divider />
      <SmoothSailing />
      <WhyChoose />
      <Elevating />
    </div>
  );
};

export default page;
