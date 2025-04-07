import clsx from "clsx";
import styles from "./vision.module.css";
import { Container, TCTitle } from "@/components";
import { visson, vissonright, misson, missonright, justiceStand } from "@/assets/images";
import Image from "next/image";

export const Vission = () => {
  return (
    <section className="section-spcing-y position-relative">
      <Container >
        <TCTitle
          tag={true}
          label="Vision & Mission"
          smallSize
          title={
            <>
              <span className="font-italic font-secondary fw-normal">
                Brand Shield:{" "}
              </span>
              Our Purpose & Commitment
            </>
          }
        />

        <div className={styles.gridContainer}>
          <div className={clsx(styles.visionWrapper, 'bg-tangaroa position-relative')}>
            <div className={styles.vissonIconWrapper}>
              <Image src={visson} alt="Misson" width={50} height={50} />
            </div>
            <span className="position-absolute top-0 end-0">
              <Image src={vissonright} alt="Misson" width={50} height={50} />
            </span>
            <h3 className="clr-white fw-normal pt-5 pb-3">Our Vision</h3>
            <p className="clr-gray sm -letter-normal">
              To be the most trusted and innovative global trademark solutions provider, empowering businesses to protect, strengthen, and maximize their brand value.
              Through expertise, technology, and unwavering commitment, we ensure brands thrive securely in a competitive marketplace.
            </p>
          </div>
          <div className={clsx(styles.visionWrapper, 'bg-white position-relative')}>
            <div className={styles.vissonIconWrapper}>
              <Image src={misson} alt="Misson" width={50} height={50} />
            </div>
            <span className="position-absolute top-0 end-0">
              <Image src={missonright} alt="Misson" width={50} height={50} />
            </span>
            <h3 className="clr-dark fw-normal pt-5 pb-3">Our Mission</h3>
            <p className="clr-gray sm -letter-normal">
              Our mission is to protect and strengthen brands through expert trademark registration, enforcement, and strategic legal solutions.
              We ensure businesses thrive with confidence by safeguarding their identity against infringement and brand dilution.
            </p>
          </div>
        </div>
      </Container>
      <span className={clsx(styles.justiceStand, 'position-absolute start-0')}>
        <Image src={justiceStand} alt="Misson" width={50} height={50} />
      </span>
    </section>
  );
};
