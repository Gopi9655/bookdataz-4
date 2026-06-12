const streams = [
  { top: "11%", width: "9rem", duration: "10s", delay: "-4s", accent: true },
  { top: "22%", width: "13rem", duration: "13s", delay: "-9s" },
  { top: "39%", width: "8rem", duration: "11s", delay: "-2s" },
  { top: "58%", width: "15rem", duration: "15s", delay: "-11s", accent: true },
  { top: "73%", width: "11rem", duration: "12s", delay: "-6s" },
  { top: "88%", width: "7rem", duration: "9s", delay: "-3s" },
];

const DataStreams = () => (
  <div className="data-streams" aria-hidden="true">
    {streams.map((stream, index) => (
      <span
        key={index}
        className={stream.accent ? "data-stream data-stream-accent" : "data-stream"}
        style={{
          top: stream.top,
          width: stream.width,
          animationDuration: stream.duration,
          animationDelay: stream.delay,
        }}
      />
    ))}
  </div>
);

export default DataStreams;
