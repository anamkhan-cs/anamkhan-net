import { Container } from "reactstrap";
import { AiOutlineLink } from "react-icons/ai";
import classnames from "classnames";

import {
  container,
  header,
  containerAll,
  icons,
  names,
  using,
} from "./Projects.module.scss";
import cpdVid from "./assets/cpdVid.mp4";
import exquiro from "./assets/exquiro.mp4";
import healthtracker1 from "./assets/healthtracker1.png";
import healthtracker2 from "./assets/healthtracker2.png";
import healthtracker3 from "./assets/healthtracker3.png";
import meetnewfriends from "./assets/meetnewfriends.png";
import spoil1 from "./assets/spoil1.png";
import spoil2 from "./assets/spoil2.png";
import racket from "./assets/racket.mp4";
import sentiment1 from "./assets/sentiment1.png";
import sentiment2 from "./assets/sentiment2.png";

const Projects = () => {
  return (
    <Container fluid className={container}>
      <div className={containerAll}>
        <div>
          <h1 className={header}>Projects</h1>
        </div>

        <div className="mt-3">
          <div className="d-flex justify-content-between align-items-center mb-1">
            <span className={names}>
              Personal Website |
              <a
                href="https://github.com/anamkhan2/anamkhan-net"
                target="_blank"
                rel="noreferrer"
                className={icons}
              >
                <AiOutlineLink /> Github Linked Here
              </a>
            </span>
            <span>Sping 2021</span>
          </div>
          <div className={using}>ReactJS, Boostrap, Reactstrap, HTML/CSS</div>
          <div className="mt-1">
            <ul>
              <li>Designed a personal website to better showcase my work</li>
            </ul>
          </div>
        </div>

        <div className="mt-3">
          <div className="d-flex justify-content-between align-items-center mb-1">
            <span className={names}>
              Chicago Police Database |
              <a
                href="https://github.com/Northwestern-Data-Sci-Seminar/Invisible-Institute-Chicago-Reporter-Collaboration-Public/tree/master/The%20Nimble%20Ogres"
                target="_blank"
                rel="noreferrer"
                className={icons}
              >
                <AiOutlineLink /> Github Linked Here
              </a>
            </span>
            <span>Northwestern University | Fall 2020</span>
          </div>
          <div className={using}>SQL, Tableau, Observable/D3</div>
          <div>
            <video width="400" height="300" controls autoplay>
              <source src={cpdVid} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
          <div className="mt-1">
            <ul>
              <li>
                Analysed the Chicago Police Database to find conclusive evidence
                about the role race plays in the department. Tried to answer
                questions such as - how the race of the victim affects the
                verdict, the compensation offered and how the perpetrator's race
                and position influences the outcome.
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-3">
          <div className="d-flex justify-content-between align-items-center mb-1">
            <span className={names}>
              Exquiro - Context Based Search |
              <a
                href="https://github.com/quinnshim2021/Exquiro"
                target="_blank"
                rel="noreferrer"
                className={icons}
              >
                <AiOutlineLink />
                Github Linked Here
              </a>
            </span>
            <span>Northwestern University | Fall 2020</span>
          </div>
          <div className={using}>
            Google Search API, Rake Algorithm, Apps Script, HTML
          </div>
          <div>
            <video width="400" height="250" controls autoplay>
              <source src={exquiro} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
          <div className="mt-1">
            <ul>
              <li>
                A Google Doc add-on that does context based search for you as
                you type. Helps you write a more informed and well researched
                essay, story, note, even a grocery list!
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-3">
          <div className="d-flex justify-content-between align-items-center mb-1">
            <span className={names}>
              Health Tracker |
              <a
                href="https://github.com/anamkhan2/HealthTracker_Student_View"
                target="_blank"
                rel="noreferrer"
                className={icons}
              >
                <AiOutlineLink />
                Github Linked Here
              </a>
            </span>
            <span>Northwestern University | Spring 2019</span>
          </div>
          <div className={classnames(using, "mb-1")}>
            Reactjs, React Native, Bootstrap, Firebase, Travis CI, Cypress
          </div>
          <div>
            <div className="d-flex justify-content-between align-items-center">
              <img
                src={healthtracker3}
                alt="HealthTracker student"
                width="200"
                height="400"
              />
              <img
                src={healthtracker2}
                alt="HealthTracker professor"
                height="200"
                width="350"
              />
              <img
                src={healthtracker1}
                alt="HealthTracker health services"
                height="150"
                width="300"
              />
            </div>
          </div>
          <div className="mt-1">
            <ul>
              <li>
                Health tracker app that allows student to track his temperature
                and other symptoms. The professor can view his students health
                stats to be more aware of how his class feels. In case the
                student is deemed sick, the information is sent to the Health
                Services department.
              </li>
            </ul>
          </div>
        </div>

        <div>
          <div className="d-flex justify-content-between align-items-center">
            <span className={names}>
              Meet New Friends |
              <a
                href="https://github.com/anamkhan2/MeetNewFriends"
                target="_blank"
                rel="noreferrer"
                className={icons}
              >
                <AiOutlineLink />
                Github Linked Here
              </a>
            </span>
            <span>Northwestern University | Spring 2019</span>
          </div>
          <div className={classnames(using, "mb-1")}>
            Reactjs, React Native, Bootstrap, Firebase, Travis CI, Cypress
          </div>
          <div>
            <div className="d-flex justify-content-between align-items-center">
              <img
                src={meetnewfriends}
                alt="Meet new friends"
                width="450"
                height="300"
              />
            </div>
          </div>
          <div className="mt-1">
            <ul>
              <li>
                A networking website that helps Northwestern freshman find
                common interests and build connections by participating in
                various events created by other students
              </li>
            </ul>
          </div>
        </div>

        <div>
          <div className="d-flex justify-content-between align-items-center">
            <span className={names}>
              Collision Detection Game |
              <a
                href="https://github.com/anamkhan2/Collision_Detection"
                target="_blank"
                rel="noreferrer"
                className={icons}
              >
                <AiOutlineLink />
                Github Linked Here
              </a>
            </span>
            <span>Northwestern University | Fall 2019</span>
          </div>
          <div className={classnames(using, "mb-1")}>Racket</div>
          <div>
            <div className="d-flex justify-content-between align-items-center">
              <video width="400" height="250" controls autoplay>
                <source src={racket} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
          <div className="mt-1">
            <ul>
              <li>
                Targets falling people from helicopters using arrow keys to move
                the canon to aim at them
              </li>
            </ul>
          </div>
        </div>

        <div>
          <div className="d-flex justify-content-between align-items-center">
            <span className={names}>
              Spoil App |
              <a
                href="https://github.com/anamkhan2/Spoil_App"
                target="_blank"
                rel="noreferrer"
                className={icons}
              >
                <AiOutlineLink />
                Github Linked Here
              </a>
            </span>
            <span>Northwestern University | Fall 2019</span>
          </div>
          <div className={classnames(using, "mb-1")}>Html, CSS, Javascript</div>
          <div>
            <div className="d-flex justify-content-between align-items-center">
              <img src={spoil1} alt="Spoil app demo" height="250" width="350" />
              <img src={spoil2} alt="Spoil app demo" height="250" width="350" />
            </div>
          </div>
          <div className="mt-1">
            <ul>
              <li>
                Aims to alleviate the current crisis of wasted food by attaching
                a device to your refrigerator that maintains a list of food,
                their expiration dates and a dynamic grocery list
              </li>
            </ul>
          </div>
        </div>

        <div>
          <div className="d-flex justify-content-between align-items-center">
            <span className={names}>
              Sentiment Analysis of Social Media |
              <a
                href="https://github.com/anamkhan2/Sentiment_Analysis"
                target="_blank"
                rel="noreferrer"
                className={icons}
              >
                <AiOutlineLink />
                Github Linked Here
              </a>
            </span>
            <span>BMS Institute of Technology | Spring 2019</span>
          </div>
          <div className={classnames(using, "mb-1")}>
            Tweepy, NLTK, VADER algorithm, Tableau
          </div>
          <div>
            <div className="d-flex justify-content-between align-items-center">
              <img
                src={sentiment1}
                alt="sentiment analysis1"
                height="250"
                width="350"
              />
              <img
                src={sentiment2}
                alt="sentiment analysis2"
                height="250"
                width="350"
              />
            </div>
          </div>
          <div className="mt-1">
            <ul>
              <li>
                Capstone project which analysed microblogs on Twitter to gather
                information and reactions to just about anything.
              </li>
              <li>
                By learning about customer base reactions, customised marketing
                strategies can be developed
              </li>
            </ul>
          </div>
        </div>

        <div>
          <div className="d-flex justify-content-between align-items-center">
            <span className={names}>
              Artform Platform |
              <a
                href="https://github.com/anamkhan2/ArtformPlatform"
                target="_blank"
                rel="noreferrer"
                className={icons}
              >
                <AiOutlineLink />
                Github Linked Here
              </a>
            </span>
            <span>BMS Institute of Technology | Fall 2018</span>
          </div>
          <div className={classnames(using, "mb-1")}>
            Javascript, PHP, MySQL HTML, CSS, Bootstrap
          </div>
          <div className="mt-1">
            <ul>
              <li>
                A web platform for artists to display their work, network in the
                community allowing them to collaborate and create
              </li>
            </ul>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Projects;
