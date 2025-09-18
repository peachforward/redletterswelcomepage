import { useState, useEffect } from "react";

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

export const CountdownTimer = () => {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    // Set launch date to 30 days from now
    const launchDate = new Date();
    launchDate.setDate(launchDate.getDate() + 30);
    
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = launchDate.getTime() - now;
      
      if (distance > 0) {
        setTimeLeft({
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((distance % (1000 * 60)) / 1000)
        });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="w-full max-w-2xl mx-auto text-white">
      <div className="text-center mb-8">
        <h3 className="text-2xl font-bold text-white  mb-2">Launch Countdown</h3>
        <p className="text-muted-foreground">Get ready for something amazing</p>
      </div>
      
      <div className="grid grid-cols-4 gap-4">
        {[
          { label: "Days", value: timeLeft.days },
          { label: "Hours", value: timeLeft.hours },
          { label: "Minutes", value: timeLeft.minutes },
          { label: "Seconds", value: timeLeft.seconds }
        ].map((item) => (
          <div 
            key={item.label}
            className="bg-gradient-card rounded-lg p-6 shadow-card text-center animate-fade-up"
          >
            <div className="text-3xl lg:text-4xl font-bold text-primary mb-2">
              {item.value.toString().padStart(2, '0')}
            </div>
            <div className="text-sm text-muted-foreground uppercase tracking-wide">
              {item.label}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};