import { useState } from "react";
import "./App.css";

const courses = [
  {
    title: "HTML та CSS",
    description: "Навчись створювати структуру та дизайн сайтів.",
    level: "Початковий",
    price: 1500,
  },
  {
    title: "JavaScript",
    description: "Вивчи основи програмування та інтерактивності.",
    level: "Середній",
    price: 2500,
  },
  {
    title: "React",
    description: "Створюй сучасні вебзастосунки.",
    level: "Просунутий",
    price: 3500,
  },
];

function App() {
  const [message, setMessage] = useState("");

  return (
    <div>
      <header>
        <h2>WebCraft</h2>
        <nav>
          <a href="#home">Головна</a>
          <a href="#courses">Курси</a>
          <a href="#about">Про нас</a>
        </nav>
      </header>

      <section className="hero" id="home">
        <h1>Навчайся програмувати з WebCraft</h1>
        <p>Обирай курс та відкривай світ IT!</p>
      </section>

      <main id="courses">
        <h2>Наші курси</h2>

        <div className="courses">
          {courses.map((course) => (
            <div className="course-card" key={course.title}>
              <h3>{course.title}</h3>
              <p>{course.description}</p>
              <p>Рівень: {course.level}</p>
              <p>Ціна: {course.price} грн</p>

              <button onClick={() => setMessage(`Ви записалися на курс ${course.title}!`)}>
                Записатися
              </button>
            </div>
          ))}
        </div>

        <p>{message}</p>
      </main>

      <footer id="about">
        © 2026 WebCraft. Усі права захищені.
      </footer>
    </div>
  );
}

export default App;