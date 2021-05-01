import {
  header,
  container,
  contentContainer,
  icons,
  iconContainer,
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

const Contact = () => {
  return (
    <>
      <Container className={container} fluid>
        <h1 className={header}>Contact</h1>
        <div className={contentContainer}>
          <p>
            If you would like to connect, please use any of the various social
            media (there's a lot) linked below, or just send me an email!
          </p>
          <p>I can send a picture of my cats on request!</p>
        </div>
      </Container>
      <Row>
        <footer className="footer">
          <div
            className={classnames(
              "d-flex justify-content-center",
              iconContainer
            )}
          >
            <a
              href="mailto:agk997@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <GrMail className={icons} size={60} />
            </a>

            <a
              href="https://www.linkedin.com/in/anamkhan-cs"
              target="_blank"
              rel="noreferrer"
            >
              <GrLinkedin className={icons} size={60} />
            </a>

            <a
              href="https://github.com/anamkhan2"
              target="_blank"
              rel="noreferrer"
            >
              <GrGithub className={icons} size={60} />
            </a>

            <a
              href="https://www.facebook.com/anam.partyrockanthem/"
              target="_blank"
              rel="noreferrer"
            >
              <GrFacebookOption className={icons} size={60} />
            </a>

            <a
              href="https://www.instagram.com/anamgkhan/"
              target="_blank"
              rel="noreferrer"
            >
              <GrInstagram className={icons} size={60} />
            </a>
          </div>
        </footer>
      </Row>
    </>
  );
};

export default Contact;
