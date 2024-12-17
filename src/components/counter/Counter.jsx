import React, { useEffect, useState } from "react";
import CountUp from "react-countup";
import "./counter.css";

const Counter = () => {
  const counters = [
    {
      value: 20,
      label: "Spent",
      description: "In Paid Ads",
    },
    {
      value: 1000000,
      label: "Leads Generated",
      description: "Potential Customers",
    },
    {
      value: 250,
      label: "Revenue Generated",
      description: "For Our Clients",
    },
  ];

  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.5 },
    );

    const element = document.querySelector(".gpt3__counter");
    if (element) observer.observe(element);

    return () => {
      if (element) observer.unobserve(element);
    };
  }, []);

  return (
    <div className="gpt3__counter section__padding">
      <div className="gpt3__counter-container">
        {counters.map((counter, index) => (
          <div key={index} className="gpt3__counter-item">
            <h3 className="gradient__text">
              {isVisible ? (
                <CountUp
                  start={0}
                  end={counter.value}
                  duration={2.5}
                  separator=","
                  suffix={index === 0 || index === 2 ? "M+" : "+"} // Customize suffix
                />
              ) : (
                "0"
              )}
            </h3>
            <div className="counter-content">
              <h4>{counter.label}</h4>
              <p>{counter.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Counter;
