import { GlobalStyle } from "./global.styles";
import Header from './components/header/header.component';
import About from './components/about-section/about.component';
import Features from './components/features/features.component';
import Tours from "./components/tours-section/tours.component";
import Stories from "./components/stories-section/stories.component";
import SignInSignUp from "./components/signin-signup-section/signin-signup.component";
import Footer from './components/footer/footer.component';
import Navigation from "./components/navigation/navigation.component";

function App() {
  return (
    <div>
      <GlobalStyle />
      <Navigation />
      <Header/>
      <About />
      <Features/>
      <Tours />
      <Stories />
      <SignInSignUp />
      <Footer />
    </div>
  );
}

export default App;
