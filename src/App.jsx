

function App() {
  return (
    <FastFoodProvider>
      <div className="App">
        <SearchBar />
        <Location />
      </div>
    </FastFoodProvider>
  );
}

export default App;
