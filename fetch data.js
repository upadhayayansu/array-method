export function App(props) {
  const [data, setData] = useState();
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users").then((res) => {
      res.json().then((data) => {
        setData(data);
      });
    });
  }, []);
  console.log(data);

  return (
    <div className="App">
      {data?.map((item) => {
        return <div>{item.name}</div>;
      })}
    </div>
  );
}
export default App;
