import Header from "./Header.jsx";
import Footer from "./Footer.jsx";
import Counter from "./Counter.jsx";
import Products from "./Products.jsx";
import UserGreeting from "./UserGreeting.jsx";
import List from "./List.jsx";


function App() {
  return (
    <>
      <Header />
      <UserGreeting isLoggedIn={true} username="Ashfaq" />
      <Products product="Frozen Berries" price={249} />
      <Products product="Frozen Cherries" price={249} />
      <List />
      <Counter />
      <Footer />
    </>
  );
}

export default App;
