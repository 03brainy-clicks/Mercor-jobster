"use client"
import React, { useEffect, useRef } from "react";
import Typed, { TypedOptions } from "typed.js";

interface TypedProps {
  strings: string[];
  typeSpeed?: number;
  backSpeed?: number;
  backDelay?: number;
  showCursor?: boolean;
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
  const el = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (!el.current) return;

    const options: TypedOptions = {
      strings,
      typeSpeed,
      backSpeed,
      backDelay,
      showCursor,
      loop,
    };

    const typed = new Typed(el.current, options);

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
