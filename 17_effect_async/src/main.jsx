import { h, render } from "preact";
import { useState, useEffect } from "preact/hooks";

const fetchStories = async () => {
  const res = await fetch(
    "https://hacker-news.firebaseio.com/v0/topstories.json"
  );
  const json = await res.json();
  return json;
};

const App = () => {
  const [stories, setStories] = useState([]);
  useEffect(() => {
    (async () => {
      const stories = await fetchStories();
      setStories(stories);
    })();

    return () => console.log("CleanUp!");
  }, []);

  return (
    <ul>
      {stories.map((story) => (
        <li key={story}>
          <a
            href={`https://hacker-news.firebaseio.com/v0/item/${story}.json?print=pretty`}
          >
            {story}
          </a>
        </li>
      ))}
    </ul>
  );
};

render(<App />, document.body);
