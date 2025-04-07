import clsx from "clsx";
import { Icons } from "@/constants";
import { Container, TCTitle } from "@/components";
import { useUniqueId } from "@/hooks";
import styles from "./WhyUs.module.css";

export const WhyUs = ({
  title,
  label,
  highlightTitle,
  benefitsTitle,
  subContent,
  benefits,
  data,
  smallTitle,
  white,
  tag,
  smallSize,
}) => {
  const id = useUniqueId();
  return (
    <section className="section-spacing-mt">
      <Container>
        <TCTitle
          title={title}
          label={label}
          highlightTitle={highlightTitle}
          smallTitle={smallTitle}
          white={white}
          tag={tag}
          smallSize={smallSize}
        />
        <div className={clsx(styles.wrapper, "d-grid")}>
          <div className={clsx(styles.imgWrapper, "ratio")}></div>
          <div
            className={clsx(
              styles.card,
              "clr-white bg-tangaroa d-flex flex-column"
            )}
          >
            <h5 className="fw-medium mb-4">{benefitsTitle}</h5>
            <ul
              className={clsx(
                styles.listWrapper,
                "list-unstyled d-flex flex-column list-style-none"
              )}
            >
              {benefits?.map((benefit, index) => (
                <li key={id + index} className="d-flex align-items-center">
                  {Icons.CheckArrow}
                  <span className="clr-white-low">{benefit}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className={clsx(styles.imgWrapperBottom, "d-grid flex-wrap")}>
          {data?.map((item, index) => (
            <div
              key={id + index}
              className={clsx(
                styles.CardSecond,
                "bg-white d-flex align-items-center"
              )}
            >
              <div
                className={clsx(
                  styles.IconsWrapper,
                  "clr-white d-flex align-items-center justify-content-center"
                )}
              >
                {item.icon}
              </div>
              <div>
                <h3 className="fw-semibold">{item.percentage}</h3>
                <p className="clr-shadow mt-1 mb-0">{item.description}</p>
              </div>
            </div>
          ))}
          <p className="clr-shadow">{subContent}</p>
        </div>
      </Container>
    </section>
  );
};
