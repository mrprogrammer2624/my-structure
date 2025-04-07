"use client";
import Image from "next/image";
import { Container, SwiperSlider, TCTitle } from "@/components/";
import clsx from "clsx";
import styles from "./OurGallery.module.css";
import { SwiperSlide } from "swiper/react";
import { journeyItems } from "@/constants/data";

export const OurGallery = () => {
  return (
    <section
      className={clsx(
        styles.sectionWrapper,
        "section-spacing-py section-spacing-mt position-relative"
      )}
    >
      <Container>
        <TCTitle
          tag
          smallSize
          white
          label={"Our Gallery"}
          title={"A Glimpse into "}
          highlightTitle="Our Journey"
        />
        <SwiperSlider
          pagination={false}
          navigation={false}
          spaceBetween={48}
          className={""}
          slidesPerView={4.9}
          autoplay={true}
          centeredSlides={true}
          grabCursor={false}
          // breakpoints={breakpoints}
          // direction={direction}
          loop={true}
          freeMode={false}
        >
          {journeyItems?.map((item) => (
            <SwiperSlide key={item.id}>
              <div className="journey-slide">
                <div className="journey-image-container">
                  <Image
                    src={item.image || "/placeholder.svg"}
                    alt="Our Jouney"
                    width={400}
                    height={500}
                    className="journey-image"
                  />
                </div>
              </div>
            </SwiperSlide>
          ))}
        </SwiperSlider>
      </Container>
    </section>
  );
};
