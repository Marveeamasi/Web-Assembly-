import { useEffect, useState } from "react";

export default function SearchApp() {
  const [wasm, setWasm] = useState(null);

  useEffect(() => {
    fetch("/path/to/search.wasm")
      .then((response) => response.arrayBuffer())
      .then((bytes) => WebAssembly.instantiate(bytes))
      .then((result) => setWasm(result.instance.exports));
  }, []);

  const handleSearch = (query) => {
    const dataset = ["apple", "banana", "cherry", "date"];
    const index = wasm.find_text(query, dataset);
    console.log(index !== -1 ? dataset[index] : "Not Found");
  };

  return <input type="text" onChange={(e) => handleSearch(e.target.value)} />;
}
