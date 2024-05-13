import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
function DetailsCard() {
    let obj = useParams();
    console.log(obj)
    const courses = [
        {
          id: 0,
          image: "https://www.onlinecoursereport.com/wp-content/uploads/2020/07/shutterstock_394793860-1536x1177.jpg",
          title: "Web Development Bootcamp",
          description: "Web development involves frontend and backend tasks, employing HTML, CSS, and JavaScript for user interface design and server-side operations managed by languages like Python or PHP. Security protocols such as HTTPS and SEO optimization ensure website protection and visibility. Continuous learning is vital in this dynamic field, and collaboration among developers, designers, and project managers drives successful outcomes, fundamentally shaping internet interactions and digital services."
        },
        {
          id: 1,
          image: "https://i.ytimg.com/vi/wOiEIxbU2eI/maxresdefault.jpg",
          title: "JavaScript Fundamentals",
          description: "JavaScript is a scripting language used to create interactive web pages and web applications. It runs on the client-side, enabling dynamic and responsive user interfaces. With its versatile capabilities, JavaScript can manipulate webpage elements, handle user input, and communicate with servers asynchronously. Its widespread adoption and extensive libraries make it an essential tool for web developers worldwide. JavaScript continues to evolve, with regular updates and improvements, ensuring its relevance in modern web development.Learn the basics of JavaScript programming language, including variables, loops, and functions."
        },
        {
          id: 2,
          image: "https://cdn.eduonix.com/assets/images/header_img/2020022708051011716.jpg",
          title: "React Masterclasses",
          description: "React is a popular JavaScript library for building user interfaces, focusing on component-based development for efficient code organization. It simplifies the creation of interactive UIs by managing the application state and updating the DOM efficiently. React's virtual DOM improves performance by minimizing unnecessary re-renders. Its ecosystem includes tools like React Router and Redux for routing and state management, respectively. React's declarative syntax and reusable components make it a preferred choice for developing scalable and maintainable web applications."
        },
        {
          id: 3,
          image: "https://static.skillshare.com/uploads/video/thumbnails/c073470e95824079bc93e74d1bd5bdb5/original",
          title: "Python Programming",
          description: "Python is a versatile and beginner-friendly programming language known for its readability and simplicity. It supports multiple paradigms, including procedural, object-oriented, and functional programming. Python's extensive standard library offers modules for various tasks, from web development to data analysis and machine learning. Its clear syntax and dynamic typing make it conducive to rapid development and prototyping. Python's large and active community contributes to its widespread adoption and continuous evolution."
        },
        {
          id: 4,
          image: "https://i1.wp.com/phdcoding.com/wp-content/uploads/2020/04/what-is-data-science.jpg?fit=1920%2C1080&ssl=1",
          title: "Data Science",
          description: "Data science involves extracting insights from data using scientific methods and advanced algorithms. It encompasses data cleaning, analysis, visualization, and interpretation to inform decision-making processes. Python and R are commonly used programming languages in data science, along with tools like TensorFlow and scikit-learn for machine learning. Data scientists leverage statistical techniques and machine learning models to solve complex problems and predict future outcomes. The field is vital for businesses seeking to gain competitive advantages through data-driven strategies and innovation."
        },
        {
          id: 5,
          image: "https://logos-download.com/wp-content/uploads/2016/10/Java_logo_icon.png",
          title: "Java",
          description: "Java is a versatile and widely-used programming language renowned for its platform independence and robustness. It follows the write once, run anywhere principle, enabling developers to create applications that can run on any device with a Java Virtual Machine (JVM). Java's object-oriented nature promotes code reusability and modularity, enhancing development efficiency. It has a vast ecosystem of libraries, frameworks, and tools, making it suitable for various applications, from web development to enterprise software. Java's strong community support and regular updates ensure its relevance and longevity in the software development landscape."
        }
      ];
  return (
    <>
    <h1 id="coursehead">COURSES</h1>
      <div id="container">
        {courses.map(course => (
          <div id="course-card" >
            <img className="course-img" src={course.image} alt="title" />
            <div className="card-details">
              <h2 className="course-title">{course.title}</h2>
              <p>{course.id}</p>
            </div>
          </div>
        ))}
       </div>
    </>
  )
}

export default DetailsCard