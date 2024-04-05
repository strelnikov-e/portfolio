
import JobBoardImg from "../assets/images/job-board-img.png";
import IssueTrackerImg from "../assets/images/issue-tracker-img.png";
import PercolationImg from "../assets/images/percolation-img.png";
import PhotoGalleryImg from "../assets/images/photo-galery.png";
import KDTreeImg from "../assets/images/kd-tree-img.png";

export const issueTracker = {
  name: "Issue Tracker",
  href: "https://issuetracker-client-production.up.railway.app/issues",
  technologies: ["Java", "Spring Boot", "JavaScript", "React"],
  image: IssueTrackerImg,
  shortDescription:
    "Project mirroring some functions of Jira to create and track tickets. Click on the card to check it out online.",
  description:
    "<p>An application designed to help software development teams track, prioritize, and manage issues or bugs encountered during the development process. It provides functionalities for logging bugs, assigning them to team members, tracking their status, setting priorities, attaching relevant comments, and ultimately resolving them. It consists of two main services: back-end application with database connectivity and front-end.</p><br/><p>Communication between services is implemented via addressing REST API endpoints. Thanks to role based authorization system, project managers and administrators can restrict users from access to protected resources.</p>",
};

export const jobBoard = {
  name: "Job Board",
  href: "",
  technologies: ["Java", "Spring Boot", "JavaScript", "React"],
  image: JobBoardImg,
  shortDescription:
    "It is an online platform that connects job seekers with employers by listing available job opportunities. It allows job seekers to search and apply for jobs based on various criteria such as location, industry, job title, and experience level.",
  description:
    "<p>It is an online platform that connects job seekers with employers by listing available job opportunities. It allows job seekers to search and apply for jobs based on various criteria such as location, industry, job title, and experience level. Employers can post job listings, manage applications, and communicate with candidates through the platform.</p><br><p>This project built using micro service architecture to improve scalability. You can find more information about the project's on GitHub page.</p>"
};

export const photoGallery = {
    name: "Photo Galley",
    href: "https://evstrelnikov.ru",
    technologies: ["JavaScript", "React"],
    image: PhotoGalleryImg,
    shortDescription:
      "The website serves as a digital space for photographer to exhibit his or her work and engage with a wider audience.",
    description:
      "<p>The website serves as a digital space for photographer to exhibit his or her work and engage with a wider audience. An online platform provides users with an organized and visually appealing interface to browse through different albums or categories of photos. Users can view individual images in full size, navigate between photos using controls or gestures, and have options to share photos.</p>"
  };

  export const percolation = {
    name: "Percolation",
    href: "https://github.com/strelnikov-e/Algorithms-Percolation",
    technologies: ["Java"],
    image: PercolationImg,
    shortDescription:
      "The program simulates a mathematical model known as percolation theory, which studies the behavior of fluid flow through porous materials.",
    description:
      "<p>The program simulates a mathematical model known as percolation theory, which studies the behavior of fluid flow through porous materials. In the context of computer science and algorithms, a percolation program typically involves simulating the percolation process on a grid or network, where each cell or site can be either open or closed. The goal is to determine if there exists a path of open cells from the top to the bottom of the grid, indicating percolation through the material.</p><br/><p>This implementations of percolation programs involve techniques such as union-find data structures to efficiently model the percolation process and determine whether percolation occurs.</p>"
  };

  export const kdTree = {
    name: "Search and Select",
    href: "",
    technologies: ["Java"],
    image: KDTreeImg,
    shortDescription:
      "The 'find and select' algorithm with KD-tree is a method used for efficiently searching and selecting points or data within a multidimensional space.",
    description:
      "<p>The 'find and select' algorithm with KD-tree is a method used for efficiently searching and selecting points or data within a multidimensional space. KD-trees (k-dimensional trees) are data structures that partition space into regions to facilitate search operations. This algorithm combines the benefits of KD-trees with efficient search techniques to find and select points that satisfy certain criteria.</p><br/><p>The combination of KD-trees and efficient search techniques enables the algorithm to perform fast and scalable searches in multidimensional spaces, making it valuable in various applications such as computational geometry, spatial databases, nearest neighbor search, and machine learning.</p>"
  };



export const projectList = [issueTracker, jobBoard, photoGallery, percolation, kdTree];
