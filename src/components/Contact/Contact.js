import {
  header,
  container,
  contentContainer,
  icons,
  iconContainer,
  picture,
} from "./Contact.module.scss";
import {
  GrLinkedin,
  GrGithub,
  GrMail,
  GrFacebookOption,
  GrInstagram,
} from "react-icons/gr";
import { Container, Row } from "reactstrap";
import classnames from "classnames";

import smoosh from "./smoosh.jpg";

const Contact = () => {
  return (
    <>
      <Container className={container} fluid>
        <div>
          <h1 className={header}>Contact</h1>
        </div>
        <div className={contentContainer}>
          <p>
            Connect with me through my social media, or feel free to shoot me an
            email!
          </p>
          <p>
            See this project on my Github{" "}
            <a
              href="https://github.com/anamkhan2/anamkhan-net"
              target="_blank"
              rel="noreferrer"
              style={{ color: "#ffb703" }}
            >
              Linked Here
            </a>
          </p>
          <p>Here's a picture of my cat Smoosh for making it this far!</p>
          <img src={smoosh} alt="My cat" className={picture} />
        </div>
      </Container>
      <Row>
        <footer className="footer">
          <div
            className={classnames(
              "d-flex justify-content-center align-items-center",
              iconContainer
            )}
          >
            <a
              href="mailto:agk997@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <GrMail className={icons} />
            </a>

            <a
              href="https://www.linkedin.com/in/anamkhan-cs"
              target="_blank"
              rel="noreferrer"
            >
              <GrLinkedin className={icons} />
            </a>

            <a
              href="https://github.com/anamkhan2"
              target="_blank"
              rel="noreferrer"
            >
              <GrGithub className={icons} />
            </a>

            <a
              href="https://www.facebook.com/anam.partyrockanthem/"
              target="_blank"
              rel="noreferrer"
            >
              <GrFacebookOption className={icons} />
            </a>

            <a
              href="https://www.instagram.com/anamgkhan/"
              target="_blank"
              rel="noreferrer"
            >
              <GrInstagram className={icons} />
            </a>
          </div>
        </footer>
      </Row>
    </>
  );
};

export default Contact;
