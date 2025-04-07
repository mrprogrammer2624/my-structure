import Link from "next/link";
import clsx from "clsx";
import { Container, TCButton, TCInput } from "@/components";
import { contactInfo, Icons } from "@/constants";
import styles from "./ContactForm.module.css";

export const ContactForm = () => {
  return (
    <section className="section-spacing-mt section-spacing-pt mb-5">
      <Container>
        <h2 className="font-secondary fw-medium font-italic">Submit Form</h2>
        <div className={clsx(styles.wrapper, "d-grid")}>
          {/* Left Form Section */}

          <form className={clsx(styles.form, "d-flex flex-column bg-white rounded")}>
            <TCInput label="Full Name" placeholder="Enter Full Name" />
            <TCInput label="Email" placeholder="Enter Email" />
            <TCInput
              label="Project Description"
              placeholder="Brief Description Of The Project"
            />

            <TCButton
              icon={Icons.RightArrowFull}
              type="submit"
              variant="primary"
              iconEnd
            >
              Send
            </TCButton>
          </form>

          {/* Right Info Section */}
          <div
            className={clsx(
              styles.info,
              "bg-tangaroa clr-white d-flex flex-column"
            )}
          >
            <div>
              <h6 className="fw-semibold mb-2">Registered Office</h6>
              <p className="sm">Fastinfo Legal Services Private Limited</p>
            </div>

            {contactInfo?.map((info, index) => (
              <div
                key={index}
                className={clsx(
                  styles.infoWrapper,
                  "d-flex align-items-start justify-content-start"
                )}
              >
                <div
                  className={clsx(
                    styles.infoIcons,
                    "clr-golden d-flex rounded-circle"
                  )}
                >
                  {info.icon}
                </div>
                <div className={clsx(styles.infoText, "d-flex flex-column")}>
                  <span className="clr-golden fw-medium p m lh-1">
                    {info.title}
                  </span>
                  <Link href={info.link} className="p sm lh-base">
                    {info.text}
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
};
