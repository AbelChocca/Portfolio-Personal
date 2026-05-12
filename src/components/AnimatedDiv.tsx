import React, { useMemo } from "react";
import {
  motion,
  type Variants,
  type Easing,
  type TargetAndTransition,
} from "framer-motion";
import { useInView } from "react-intersection-observer";

type Preset = "fadeUp" | "fade" | "fadeLeft" | "fadeRight";

type Props = {
  children: React.ReactNode;
  className?: string;
  /** Use a named preset; defaults to 'fadeUp' */
  preset?: Preset;
  /** Wrap direct children in staggered item animations */
  stagger?: boolean;
  /** Distance in px for translate on reveal (defaults: 24) */
  distance?: number;
  /** Duration in seconds (defaults: 0.6) */
  duration?: number;
  /** Delay before animation starts (seconds) */
  delay?: number;
  /** Trigger animation only once when in view */
  once?: boolean;
  /** Backwards-compatible: direction prop maps to presets */
  direction?: "up" | "left" | "right";
};

// Design-tokens for motion
const MOTION = {
  defaultDuration: 0.6,
  staggerAmount: 0.08,
  easing: "easeOut" as Easing,
};

const containerVariants = (
  staggerChildren = MOTION.staggerAmount,
  delayChildren = 0,
) =>
  ({
    hidden: {},
    show: {
      transition: {
        staggerChildren,
        delayChildren,
      },
    },
  }) as Variants;

const itemVariantsFor = (preset: Preset, distance: number) => {
  const base: TargetAndTransition = { opacity: 0 };
  switch (preset) {
    case "fadeUp":
      base.y = distance;
      break;
    case "fadeLeft":
      base.x = -distance;
      break;
    case "fadeRight":
      base.x = distance;
      break;
    case "fade":
    default:
      // just opacity
      break;
  }
  return {
    hidden: base,
    show: { opacity: 1, x: 0, y: 0 },
  } as Variants;
};

/**
 * AnimatedDiv: minimal motion wrapper with presets and optional stagger.
 * - preset: choose direction/behavior
 * - stagger: when true, each direct child is wrapped with item animation
 * - keeps API small and consistent with ANIMATIONS.md
 */
const AnimatedDiv = ({
  children,
  className,
  preset = "fadeUp",
  stagger = false,
  distance = 24,
  duration = MOTION.defaultDuration,
  delay = 0,
  once = true,
  direction,
}: Props) => {
  // backward-compatibility: map direction to preset if provided
  const resolvedPreset: Preset = useMemo(() => {
    if (direction === "left") return "fadeLeft";
    if (direction === "right") return "fadeRight";
    if (direction === "up") return "fadeUp";
    return preset;
  }, [direction, preset]);

  const { ref, inView } = useInView({ threshold: 0.2, triggerOnce: once });

  // Staggered container mode: wrap children in item variants
  if (stagger) {
    const container = containerVariants(MOTION.staggerAmount, delay);
    const itemVars = itemVariantsFor(resolvedPreset, distance);

    return (
      <motion.div
        ref={ref}
        className={className}
        variants={container}
        initial="hidden"
        animate={inView ? "show" : "hidden"}
      >
        {React.Children.map(children, (child) => (
          <motion.div
            variants={itemVars}
            transition={{ duration, ease: MOTION.easing }}
          >
            {child}
          </motion.div>
        ))}
      </motion.div>
    );
  }

  // Single-element reveal
  const itemVars = itemVariantsFor(resolvedPreset, distance);

  return (
    <motion.div
      ref={ref}
      className={className}
      variants={itemVars}
      initial="hidden"
      animate={inView ? "show" : "hidden"}
      transition={{ duration, ease: MOTION.easing, delay }}
    >
      {children}
    </motion.div>
  );
};

export default AnimatedDiv;
