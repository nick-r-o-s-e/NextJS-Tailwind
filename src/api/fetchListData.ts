async function fetchListData() {
  const res = await fetch(
    "https://nick-r-o-s-e.github.io/mock-data/product-list.json"
  );

  if (!res.ok) {
    console.log("Fetching Error: " + res);

    throw new Error("Failed to fetch data");
  }

  return res.json();
}

export default fetchListData;
