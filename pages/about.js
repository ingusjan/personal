import Image from "next/image";
const about = () => {
  return (
    <div className="container mx-auto flex flex-col-reverse lg:flex-row">
      <div className="lg:w-1/2 lg:pr-12">
        <h1 className="font-bold text-4xl mb-6 mt-5 lg:mt-0">Ingus Jansons</h1>
        <p>
          Avid World of Warcraft player, React & Design enthuasist.
          <br />
          <span className="opacity-50">
            Welcome to my piece of the Internet.
          </span>
        </p>
        <h2 className="font-bold text-2xl mt-8 mb-6">Background</h2>
        <p>
          Born in '01 in the not-so-prestige area of Imanta in{" "}
          <b>Riga, Latvia</b>, I was curious about computers ever since I
          watched my older brother play World of Warcraft on our Dell Inspiron
          laptop.
          <br />
          <br />
          For my 12th birthday I finally got my own laptop (a low-spec i3 Asus
          laptop) on which I promptly downloaded a "totally legal" version of
          Adobe Photoshop.
          <br />
          <br />
          That was what started my now journey as a UX/UI Software Engineer.
        </p>
        <h2 className="font-bold text-2xl mt-8 mb-6">Design</h2>
        <p>
          I have a very perfectionist eye on all things UX/UI.
          <br />
          <br />
          If I see something that is misaligned, ignores accessibility, doesn't
          follow Brand Guidelines or impedes an otherwise great User Experience,
          I will always go out of my way to educate on the matter.
        </p>
        <h2 className="font-bold text-2xl mt-8 mb-6">Learning</h2>
        <p>
          I'm currently learning and developing using <b>React.js</b>; This has
          also sparked my interest in mobile development, so I've just recently
          picked up <b>React Native</b> as well.
          <br />
          <br />
          I've also put time into learning <b>low-code backends</b> like{" "}
          <b>Google Firebase</b> to get new projects off the ground in half the
          time.
        </p>
      </div>
      <div className="lg:w-1/2">
        <div className="flex flex-col lg:flex-row">
          <div className="lg:mx-auto lg:w-1/2 lg:h-1/2">
            <Image
              src="/me_bw.jpg"
              alt="Ingus Jansons"
              width={450}
              height={450}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default about;
