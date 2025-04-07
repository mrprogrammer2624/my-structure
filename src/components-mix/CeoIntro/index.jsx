import React from 'react';
import { Container, HeroWrapper, TCTitle } from "@/components";
import clsx from "clsx";
import Image from "next/image";
import { CeoIntroImage, bookImage } from "@/assets/images";
import styles from './CeoIntro.module.css';

export const CeoIntro = () => {
  return (
    <HeroWrapper bg rootClassName="section-spcing-y position-relative">
      <Container >
        <div className='section-spacing-py'>
          <TCTitle
            tag={true}
            label="CEO's Message"
            smallSize
            title={
              <>
                <span className="font-italic font-secondary fw-normal clr-white">
                  A Visionary Behind {"Trademark"}
                </span>
                <p className='clr-gray h4'>
                  Protection for Every Brand
                </p>
              </>
            }
          />
          <div className={clsx(styles.aboutWrraper, "d-grid")}>
            <div
              className={clsx(
                styles.aboutWrraperRight,
                "bg-white d-grid align-items-center justify-content-center"
              )}
            >
              <div
                className={clsx(styles.aboutRightContent, "d-flex flex-column")}
              >
                <ul className='ps-2 list-style-none'>
                  <li className='p'>📌 Ready to Protect Your Brand? Start your trademark journey or book a free consultation with Trademark Club today.</li>
                </ul>
                <h6 className="fw-semibold">
                  Empowering Brands—From Entrepreneurs to Corporates—with Trusted Trademark Solutions
                </h6>
                <p className="lg text-dark text-opacity-75 fw-medium  text-wrap lh-base -letter-spacing text-justify">
                  &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; At Trademark Club, our vision is simple—to empower every business with trusted trademark protection. From solo entrepreneurs and growing startups to multinational corporations and industrial enterprises, we offer seamless online trademark registration and custom brand protection solutions tailored to every business type. <br />
                  &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;<span className='clr-shadow sm p'>With deep expertise in intellectual property rights, I founded this company to simplify complex legal processes and give brands the legal shield they deserve. Our team is passionate about making trademark registration easy, fast, and reliable—so you can focus on growing your business while we safeguard your brand identity. </span><br />
                </p>
                <ul className='ps-4'>
                  <li>Whether you're trademarking your very first idea or securing a global portfolio, we’re committed to protecting your brand at every stage.</li>
                </ul>
                <span className='h6 fw-bold pb-0 mb-0 mt-1'>
                  - Akshay Antala <br />
                  <span className='h6 fw-semibold ps-3'>
                    &nbsp; Founder & CEO, Trademark Club
                  </span>
                </span>
              </div>
            </div>
            <div className={clsx(styles.aboutLeftImg, "ratio")}>
              <Image src={CeoIntroImage} alt="JustitiaLady" />
            </div>
          </div>
        </div>
      </Container>
      <span className={clsx(styles.bookImage, 'position-absolute start-0')}>
        <Image src={bookImage} alt="Misson" width={50} height={50} />
      </span>
    </HeroWrapper>
  );
};
