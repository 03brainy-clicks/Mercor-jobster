"use client";
import Image from "next/image";
import React, { useEffect, useRef } from "react";
import Typed from "typed.js";

interface TypedProps {
  strings: String[];
  typeSpeed?: Number;
  backSpeed?: Number;
  backDelay?: Number;
  showCursor?: Boolean;
  loop?: boolean;
}

const TypedAnimation = ({
  strings,
  typeSpeed = 100,
  backSpeed = 100,
  showCursor = false,
  backDelay = 100,
  loop = false,
}: TypedProps) => {
  const el = useRef(null);

  useEffect(() => {
    const typed: Typed = new Typed(el.current, {
      strings: strings,
      typeSpeed: typeSpeed,
      backSpeed: backSpeed,
      backDelay: backDelay,
      showCursor: showCursor,
      loop: loop,
    });

    return () => {
      typed.destroy();
    };
  }, [backDelay, backSpeed, loop, showCursor, strings, typeSpeed]);

  return (
    <>
      <span ref={el} className="text-jobster-indigo-light"></span>|
    </>
  );
};

export default TypedAnimation;
