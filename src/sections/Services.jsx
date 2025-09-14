import { useGSAP } from "@gsap/react";
import AnimatedHeaderSection from "../components/AnimatedHeaderSection";
import { servicesData } from "../constants";
import { useRef } from "react";
import { useMediaQuery } from "react-responsive";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
gsap.registerPlugin(ScrollTrigger);

const Services = () => {
  const aboutTextLine = `I build secure, high-performance full-stack apps
    with smoothUX to drive growth not headaches`;

  const serviceRef = useRef([]);
  const isDesktop = useMediaQuery({ minWidth: "48rem" });

  useGSAP(() => {
    serviceRef.current.forEach((el) => {
      if (!el) return;

      ScrollTrigger.create({
        trigger: el,
        start: "top top",
        pin: true,
        pinSpacing: false,
      });
    });
  }, []);

  return (
    <section id="services" className="min-h-screen bg-black rounded-t-4xl">
      <AnimatedHeaderSection
        subtitle={"Behind the scene, Beyond the screen"}
        title={"Services"}
        text={aboutTextLine}
        textColor={"text-white"}
        withScrollTrigger={true}
      />
      {servicesData.map((service, index) => (
        <div key={index} className="relative">
          <div
            ref={(el) => (serviceRef.current[index] = el)}
            className={`sticky px-10 pt-6 pb-12 text-white bg-black border-t-2 border-white/30 mb-20`}
            style={{
              top: isDesktop ? `calc(10vh + ${index * 5}rem)` : `0px`,
            }}
          >
            <div className="flex items-center justify-between gap-4 font-light">
              <div className="flex flex-col gap-6">
                <h2 className="text-4xl lg:text-5xl">{service.title}</h2>
                <p className="text-xl leading-relaxed tracking-widest lg:text-2xl text-white/60 text-pretty">
                  {service.description}
                </p>
                <div className="flex flex-col gap-2 text-2xl sm:gap-4 lg:text-3xl text-white/80">
                  {service.items.map((item, itemIndex) => {
                    return (
                      <div key={`item-${item}-${itemIndex}`}>
                        <h3 className="flex">
                          <span className="mr-12 text-lg text-white/30">
                            0{itemIndex + 1}
                          </span>
                          {item.title}
                        </h3>
                        {itemIndex < service.items.length - 1 && (
                          <div className="w-full h-px my-2 bg-white/30" />
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
};

export default Services;
