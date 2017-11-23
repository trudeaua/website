import { Injectable } from "@angular/core";

@Injectable()
export class DataSharing {
    screenX: number;
    screenY: number;
    isMobile: boolean;
    skills: any[];
    projects: any[];
    constructor() {
        this.skills = [
            {
                id: 1,
                icon: "https://angular.io/assets/images/logos/angular/angular.svg",
                label: "Angular 2",
                description: `<ul>
                <li>I developed 7 prototype applications at BDO Canada using Angular 2/Ionic 2</li>
                <li>Developed 3 Android applications</li>
                <li>Developed this website application using Angular 2</li>
                <li>Self taught</li>
              </ul>`,
                link: "https://angular.io/"
            },
            {
                id: 2,
                icon: "http://www.testprogramacion.com/imagenes/java.png",
                label: "Java",
                description: `<ul>
                <li>Part of a team that made an application called <a href="https://github.com/trudeaua/Tour-Guide_Java-Application">Tour Guide</a> in Java using Dijkstra's Algorithm and Google Maps API</li>
                <li>Made a variety of programs using sorting, searching, and graphing algorithms</li>
                <li>Created a basic <a href="https://github.com/trudeaua/resume-critiquer">resume critiquing program</a> at YHacks 2016 </li>
              </ul>`,
                link: "https://www.oracle.com/java/index.html"
            },
            {
                id: 3,
                icon: "https://www.python.org/static/opengraph-icon-200x200.png",
                label: "Python",
                description: `<ul>
                <li>Python was the first programming language I ever learned</li>
                <li>I created some basic graphics applications using the python graphics library</li>
                <li>Currently assistant teaching Python 3 to first year engineers at McMaster</li>
              </ul>`,
                link: "https://www.python.org/"
            },
            {
                id: 4,
                icon: "https://www.w3.org/html/logo/downloads/HTML5_Logo_512.png",
                label: "HTML5",
                description: `<ul>
                <li>I have created numerous HTML pages, including those seen on this site</li>
                <li>Tutored a high school student in a web development course</li>
                <li>Self taught</li>
              </ul>`,
                link: "https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/HTML5"
            },
            {
                id: 5,
                icon: "https://cdn0.froala.com/assets/design/pages/B/css3-57e4fa5cbaa97ba8b17cb414332ec867.png",
                label: "CSS3",
                description: `  <ul>
                <li>Styled numerous pages, including those seen on this site</li>
                <li>Tutored a high school student in a web development course</li>
                <li>Self taught</li>
              </ul>`,
                link: "https://developer.mozilla.org/en-US/docs/Web/CSS/CSS3"
            },
            {
                id: 6,
                icon: "http://it-school.com.ua/img/pics/javascript-logo.png",
                label: "Javascript",
                description: ` <ul>
                <li>Constantly use JS with web development</li>
                <li>Followed a course to create a brickbreaker-like game, as well as a Pong clone</li>
                <li>Mostly self taught</li>
              </ul>`,
                link: "https://www.javascript.com/"
            },
            {
                id: 7,
                icon: "http://ionic.io/img/2.png",
                label: "Ionic 2",
                description: `<ul>
                <li>Ionic 2 was the framwork used for app development while I was at BDO Canada</li>
                <li>All of my apps were developed with Ionic 2</li>
                <li>This website uses Ionic 2!</li>
                <li>Self taught</li>
              </ul>`,
                link: "https://ionicframework.com/"
            },
            {
                id: 8,
                icon: "http://heluxsystems.com/assets/img/Office%20365.png",
                label: "Microsoft Office",
                description: `<ul>
                <li>Competent with Word, Publisher, Powerpoint, Excel, and Outlook</li>
                <li>Have created a variety of documents with these software over 5+ years</li>
              </ul>`,
                link: "https://www.office.com/"
            },
        ]
        this.projects = [
            {
                id: 3,
                icon: './assets/imgs/SS_icon.PNG',
                label: 'Speed Snap',
                description: `
                <h6>July 2017 - Present</h6>
                <p>Currently in development</p>
                <ul>
                <li>Speed Snap is an app designed for graphic/sign designers and surveyors</li>
                <li>Allows quick photos to be taken, with options to add measurements, quantities, and notes</li>
                <li>Allows multiple survey sessions to be stored for multiple clients</li>
                <li>User's have the ability to export a survey's photos to PDF and print the document or email it</li>
                <li>Developed with Angular 2/Ionic 2, compiled with Ionic 2</li>                
                </ul>`,
                link: 'https://github.com/trudeaua/speed-snap'
            },
            {
                id: 1,
                icon: './assets/imgs/LB_icon.PNG',
                label: 'Life Battery',
                description: `<h6>August 2017 - August 2017</h6>
                <ul>
                <li>Life Battery uses worldwide life expectancy data to calculate a person's approximate remaining lifespan</li>
                <li>The lifespan remaining is converted into a battery percentage that decreases as time goes by</li>
                <li>Developed with Angular 2/Ionic 2, compiled with Ionic 2</li>
                </ul>`,
                link: 'https://play.google.com/store/apps/details?id=com.trudeaua.lifebattery&hl=en'
            },
            {
                id: 2,
                icon: './assets/imgs/TG_icon.PNG',
                label: 'Tour Guide -- Android App',
                description: `<h6>May 2017 - August 2017</h6>
                <ul>
                <li>Turned the application done in Java as a course project and turned it into an Android App</li>
                <li>Tour Guide provides an easy way to map out a tour of a city by providing a set of points of interest</li>
                <li>User's simply select the categories they want to see on their tour</li>
                <li>Tour Guide uses the Google Maps API to generate a route within a city/region</li>
                <li>Developed with Angular 2/Ionic 2, compiled with Ionic 2</li>
                </ul>`,
                link: 'https://play.google.com/store/apps/details?id=com.ionicframework.tourguide983571&hl=en'
            },
            {
                id: 4,
                icon: './assets/imgs/TG_icon.PNG',
                label: 'Tour Guide -- Java Application',
                description: `<h6>January 2017 - April 2017</h6>
                <ul>
                <li>Worked with 4 other team members to create a Java application with UI</li>
                <li>Purpose was to create an application that allowed a cheap & easy way to explore and tour a city/region</li>
                <li>App utilized JxMaps, graphing algorithms, sorting algorithms, and the Google Maps Geocoding API</li>
                <li>User's enter their starting location, and select their categories</li>
                <li>Tour Guide then displays their tour route on a Google Map</li>
                <li>Developed with Java 8</li>
                </ul>`,
                link: 'https://github.com/trudeaua/Tour-Guide_Java-Application'
            },
            {
                id: 5,
                icon: "https://image.freepik.com/free-icon/text-document_318-48568.jpg",
                label: 'Resume Critiquer',
                description: `<h6>November 2016 - November 2016</h6>
                <ul>
                <li>Created at YHacks '16</li>
                <li>My first 'big' Java application</li>
                <li>On start up, the app prompts the user to upload a resume (as a .txt file)</li>
                <li>The app searches the resume for specific keywords such as Work Experience, Skills, Education, etc.</li>
                <li>If some keywords are not found, then the app gives feedback on what to include and why to include it</li>
                <li>Developed with Java 8</li>
                </ul>`,
                link: 'https://github.com/trudeaua/resume-critiquer'
            },

        ]
    }
    getScreenX() {
        return this.screenX;
    }

    setScreenX(screenX) {
        this.screenX = screenX;
    }

    getScreenY() {
        return this.screenY;
    }

    setScreenY(screenY) {
        this.screenY = screenY;
    }

    setIsMobile(isMobile: boolean) {
        this.isMobile = isMobile;
    }

    getIsMobile() {
        return this.isMobile;
    }
    getSkills() {
        return this.skills;
    }
    getProjects() {
        return this.projects;
    }
}