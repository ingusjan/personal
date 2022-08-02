import Container from "./components/Container";
import CoreValues from "./components/CoreValues";
import Positions from "./components/Positions";
import Me from "./assets/ingus.png";
import "tippy.js/dist/tippy.css";

const App = () => {
  const age = new Date().getFullYear() - new Date("2001-06-13").getFullYear();

  return (
    <Container>
      <img
        className="rounded-full mb-2 border-4 border-gray-600"
        width="120px"
        height="120px"
        alt="Ingus Jansons"
        src={Me}
      />

      <h1 className="text-4xl font-bold">Ingus Jansons</h1>
      <h2 className="text-sm mt-1 text-gray-400">
        TypeScript Engineer & Founder
      </h2>

      <p className="text-base mt-4 mb-8">
        {age} year-old from Rīga, Latvia. Living in the UK, leading and scaling
        Front-end Projects for businesses with enterpise requirements. I also
        dabble in building tools for content creators.
      </p>

      <CoreValues />

      <hr className="border-gray-800 my-6" />

      <h3 className="mb-8 text-xl font-semibold">Experience</h3>
      <Positions />
    </Container>
  );
};

export default App;
