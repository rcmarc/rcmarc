import clsx from "clsx";

function Loading() {
  return (
    <div className="flex justify-center items-center w-full h-full">
      <Spinner />
    </div>
  );
}

function Spinner() {
  return (
    <div className="inline-block relative">
      <AnimatedDiv />
      <AnimatedDiv className="spinner-delay" />
    </div>
  );
}

function AnimatedDiv({ className }) {
  return (
    <div
      className={clsx(
        "absolute -top-14 animate-spinner -left-14 w-28 h-28 border-4 border-solid rounded-full border-sky-500",
        className
      )}
    ></div>
  );
}

export default Loading;
