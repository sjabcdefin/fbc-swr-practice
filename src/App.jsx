import useSWR from "swr";
import "./App.css";
import { fetcher } from "./fetcher.js";

function App() {
  const url = "https://httpstat.us/200?sleep=2000";
  const { data, error, isLoading } = useSWR(url, fetcher);

  if (error) {
    return <p>Failed to load.</p>;
  }
  if (isLoading) {
    return <p>Loading...</p>;
  }

  return <p>Status : {data.description}</p>;
}

export default App;
