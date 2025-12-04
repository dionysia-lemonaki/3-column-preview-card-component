import Card from "./components/Card";

const App = ({ data }) => {
  return (
    <main>
      <h1 className="sr-only">Vehicle Types</h1>
      <div className="cards">
        {data.map((item) => {
          return (
            <Card
              key={item.id}
              variant={item.variant}
              image={item.image}
              title={item.title}
              description={item.description}
            />
          );
        })}
      </div>
    </main>
  );
};

export default App;
