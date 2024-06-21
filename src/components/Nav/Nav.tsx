"use client";

import {
  ItemTransitionProgressInfo,
  useItemTransitionProgress,
} from "@/hooks/useItemTransitionProgress";
import {
  motion,
  useMotionTemplate,
  useMotionValue,
  useScroll,
  useTransform,
} from "framer-motion";
import React, { useMemo } from "react";

type Props = {};

const Nav = (props: Props) => {
  const arr = useMemo(() => {
    return Array.from({ length: 15 }, () => 0);
  }, []);
  const { scrollYProgress } = useScroll();
  const progress = scrollYProgress;
  return (
    <nav className="sticky top-24  h-fit flex flex-col gap-3">
      {arr.map((_, index) => (
        <NavItem
          key={index}
          index={index}
          total={arr.length}
          progress={progress}
          transitionRange={0.1}
          activeRange={0.02}
        />
      ))}
    </nav>
  );
};

const NavItem = (props: ItemTransitionProgressInfo) => {
  const itemProgress = useItemTransitionProgress(props);
  const rot = useTransform(itemProgress, [-1, 0, 1], [0, 30, 0]);
  const scaleX = useTransform(itemProgress, [-1, 0, 1], [1, 2.3, 1]);
  // const opacity = useTransform(itemProgress, [-1, 0, 1], [0.5, 1, 0.5]);

  const transformComposition = useMotionTemplate`rotate(${rot}deg) scaleX(${scaleX})`;
  return (
    <motion.div
      className="bg-zinc-900 w-2 h-1"
      style={{
        // opacity,
        transform: transformComposition,
        // scaleX: scaleX,
        // rotate: rot,
      }}
    ></motion.div>
  );
};

export default Nav;
