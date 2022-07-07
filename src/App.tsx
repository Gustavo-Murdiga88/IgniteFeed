import { Header } from "./components/Header";
import { Sidebar } from "./components/SideBar";
import { Post } from "./components/Post";

import styles from "./App.module.css";

function App() {
  const publication = [];

  publication.push(
    {
      id: "2",
      author: {
        img: "https://github.com/Gustavo-Murdiga88.png",
        name: "Gustavo Murdiga",
        ocupation: "Web developer",
      },
      content: [
        {
          type: "paragraph",
          content: "Fala galeraa 👋",
        },
        {
          type: "paragraph",
          content:
            "Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀",
        },
        {
          type: "link",
          content: "jane.design/doctorcare",
        },
        {
          type: "link",
          content: "#novoprojeto #nlw #rocketseat",
        },
      ],
      publishedIn: new Date(2022, 6, 1),
    },
    {
      id: "1",
      author: {
        img: "https://github.com/Gustavo-Murdiga88.png",
        name: "Gustavo Murdiga",
        ocupation: "Web developer",
      },
      content: [
        {
          type: "paragraph",
          content: "Fala galeraa 👋",
        },
        {
          type: "paragraph",
          content:
            "Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀",
        },
        {
          type: "link",
          content: "jane.design/doctorcare",
        },
        {
          type: "link",
          content: "#novoprojeto #nlw #rocketseat",
        },
      ],
      publishedIn: new Date(2022, 5, 3),
    }
  );

  return (
    <>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {publication.map((publications) => (
            <Post key={publications.id} publication={publications} />
          ))}
        </main>
      </div>
    </>
  );
}

export default App;
