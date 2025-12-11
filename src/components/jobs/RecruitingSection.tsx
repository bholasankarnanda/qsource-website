"use client";

import React, { useState, useEffect, useRef } from "react";
import { Box, Typography, Container, Paper } from "@mui/material";

// The list of roles
const JOB_TITLES = [
  "DevOps Engineer",
  "Data Scientist",
  "Cybersecurity Analyst",
  "Product Owner",
  "Software Engineer",
  "Systems Analyst",
  "Project Manager",
];

// Duplicate the list 3 times:
// 1. Buffer above
// 2. Main visible set
// 3. Buffer below
const ROLES = [...JOB_TITLES, ...JOB_TITLES, ...JOB_TITLES];

// Animation Configuration
const CONTAINER_HEIGHT = 400;
const ITEM_HEIGHT = 50;
const PAUSE_DURATION = 100;
const LERP_FACTOR = 0.05; // Lower = smoother/slower, Higher = snappier

const RecruitingSection = () => {
  // Start at the beginning of the middle set (Index 7)
  // i calculate the initial scrollY so that item 7 is perfectly centered.
  // Center of Container = 200px. Center of Item = 30px (half of 60).
  // Formula: ScrollY = (Index * ItemHeight) - (ContainerHalf - ItemHalf)
  const CENTER_OFFSET = CONTAINER_HEIGHT / 2 - ITEM_HEIGHT / 2;
  const INITIAL_INDEX = JOB_TITLES.length; // 7
  const INITIAL_SCROLL = INITIAL_INDEX * ITEM_HEIGHT - CENTER_OFFSET;

  const [scrollY, setScrollY] = useState(INITIAL_SCROLL);

  // Refs to manage animation state without triggering re-renders
  const scrollRef = useRef(INITIAL_SCROLL);
  const targetIndexRef = useRef(INITIAL_INDEX);
  const lastArrivalTimeRef = useRef(Date.now());
  const isMovingRef = useRef(false);
  const requestRef = useRef<number>(0);

  // Animation Loop
  useEffect(() => {
    const animate = () => {
      const currentY = scrollRef.current;
      // Calculate where we WANT to be based on the target index
      const targetY = targetIndexRef.current * ITEM_HEIGHT - CENTER_OFFSET;
      const diff = targetY - currentY;

      // Threshold to decide if we have "arrived" at the target
      if (Math.abs(diff) < 0.5) {
        // STATE: ARRIVED / HOLDING
        if (isMovingRef.current) {
          // We just arrived this frame. Stop moving and set timestamp.
          isMovingRef.current = false;
          lastArrivalTimeRef.current = Date.now();
          scrollRef.current = targetY; // Snap to exact position
          setScrollY(targetY);

          // INFINITE LOOP LOGIC:
          // If we have reached the start of the 3rd set (Index 14),
          // it looks visually identical to the start of the 2nd set (Index 7).
          // We silently snap back to Index 7 so we can keep scrolling down forever.
          if (targetIndexRef.current >= JOB_TITLES.length * 2) {
            const resetIndex = JOB_TITLES.length; // 7
            targetIndexRef.current = resetIndex;
            // Recalculate scroll for the reset index
            const resetScroll = resetIndex * ITEM_HEIGHT - CENTER_OFFSET;
            scrollRef.current = resetScroll;
            setScrollY(resetScroll);
          }
        } else {
          // We are holding position. Check timer.
          if (Date.now() - lastArrivalTimeRef.current > PAUSE_DURATION) {
            // Timer finished, set target to next item
            targetIndexRef.current += 1;
            isMovingRef.current = true;
          }
        }
      } else {
        // STATE: MOVING
        // Smoothly interpolate current position towards target
        const nextY = currentY + diff * LERP_FACTOR;
        scrollRef.current = nextY;
        setScrollY(nextY);
        isMovingRef.current = true;
      }

      requestRef.current = requestAnimationFrame(animate);
    };

    requestRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(requestRef.current);
  }, [CENTER_OFFSET]);

  // Helper to calculate styles based on position relative to center
  const getItemStyle = (index: number) => {
    const itemY = index * ITEM_HEIGHT - scrollY;
    // Distance from center of container
    const distance = Math.abs(itemY + ITEM_HEIGHT / 2 - CONTAINER_HEIGHT / 2);

    // Visual calculations
    const normalizedDistance = Math.min(distance, 200);
    const opacity = Math.max(0.2, 1 - normalizedDistance / 200);
    // Reduced max scale from 1.35 to 1.25 to prevent overflow
    const scale = Math.max(0.8, 1.25 - normalizedDistance / 250);

    // Highlight logic (Green if centered)
    const isCenter = distance < ITEM_HEIGHT / 2; // Strict center check
    const color = isCenter ? "#1976d2" : "#C4C8D4";
    const fontWeight = isCenter ? 800 : 700;

    return { opacity, scale, color, fontWeight };
  };

  return (
    <Box
      component="section"
      sx={{
        bgcolor: "light",
        p: 2,
        // { xs: 6, md: 10 }
        py: { xs: 4, md: 6 },
        width: "100%",
      }}
    >
      <Container maxWidth="lg">
        <Paper
          elevation={0}
          sx={{
            backgroundColor: "#FFFFFF",
            borderRadius: { xs: 4, md: 8 },
            p: { xs: 4, md: 8 },
            boxShadow: "0px 10px 40px rgba(0, 0, 0, 0.05)",
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: { xs: "column", md: "row" },
              alignItems: "center",
              gap: { xs: 6, md: 4 },
            }}
          >
            {/* Left Side: Title and Description */}
            <Box sx={{ width: { xs: "100%", md: "40%" }, flexShrink: 0 }}>
              <Typography
                variant="h2"
                sx={{
                  fontFamily: '"Be Vietnam Pro", sans-serif',
                  fontWeight: 800,
                  color: "#0F172A",
                  fontSize: { xs: "2rem", md: "3.5rem" },
                  lineHeight: 1.1,
                  mb: 2,
                }}
              >
                Recruiting for
              </Typography>

              <Typography
                variant="body1"
                sx={{
                  fontFamily: '"Be Vietnam Pro", sans-serif',
                  fontWeight: 400,
                  color: "#5A5A66",
                  fontSize: { xs: "1rem", md: "1.125rem" },
                  lineHeight: 1.6,
                  maxWidth: "400px",
                }}
              >
                Discover a tapestry of career opportunities tailored just for
                you, spanning diverse domains – because your perfect job awaits
                in our realm of possibilities.
              </Typography>
            </Box>

            {/* Right Side: Animated Job List */}
            <Box sx={{ width: { xs: "100%", md: "60%" }, flexGrow: 1 }}>
              <Box
                sx={{
                  position: "relative",
                  height: CONTAINER_HEIGHT,
                  overflow: "hidden",
                  // Mask to fade out top and bottom edges
                  maskImage:
                    "linear-gradient(to bottom, transparent, black 20%, black 80%, transparent)",
                  WebkitMaskImage:
                    "linear-gradient(to bottom, transparent, black 20%, black 80%, transparent)",
                  pl: { md: 10 },
                }}
              >
                {/* moving container */}
                <Box
                  data-testid="animated-container"
                  sx={{
                    position: "absolute",
                    width: "100%",
                    transform: `translateY(-${scrollY}px)`,
                    // i used JS for position, so that we don't need CSS transition here
                    willChange: "transform", //helps browser animate smoothly
                  }}
                >
                  {ROLES.map((role, index) => {
                    const style = getItemStyle(index);

                    return (
                      <Box
                        key={`${role}-${index}`}
                        sx={{
                          height: ITEM_HEIGHT,
                          display: "flex",
                          alignItems: "center",
                          transformOrigin: "left center",
                        }}
                      >
                        <Typography
                          variant="h3"
                          component="div"
                          sx={{
                            fontFamily: '"Be Vietnam Pro", sans-serif',
                            fontWeight: style.fontWeight,
                            // adjusted font sizes to fit better
                            fontSize: { xs: "1.5rem", md: "2rem" },
                            color:
                              style.color === "#1976d2"
                                ? {
                                    backgroundImage:
                                      "linear-gradient(90deg, rgba(25,118,210,0.35) 0%, #1976d2 100%)",
                                    WebkitBackgroundClip: "text",
                                    WebkitTextFillColor: "transparent",
                                  }
                                : { color: style.color },

                            opacity: style.opacity,
                            transform: `scale(${style.scale})`,
                            transformOrigin: "left center",
                            whiteSpace: "nowrap",
                            // smooth transition for the color/scale changes
                            transition:
                              "color 0.3s ease, transform 0.1s linear, opacity 0.3s ease",
                          }}
                        >
                          {role}
                        </Typography>
                      </Box>
                    );
                  })}
                </Box>
              </Box>
            </Box>
          </Box>
        </Paper>
      </Container>
    </Box>
  );
};

export default RecruitingSection;
