const about = () => {
  return (
    <div>
      <h1 className="text-xl font-bold mb-4">About me</h1>
      <p>
        Avid World of Warcraft player, React & Design enthuasist.
        <br />
        Below you can see all the skills I've been acquiring over my Software Engineering career (starting September 2019).
      </p>
      <ul className="my-5">
        <p className="font-bold my-3">Front-end</p>
        <li>React.js</li>
        <li>Next.js</li>
        <li>Gatsby.js</li>
        <li>Tailwind.css</li>
        <p className="font-bold my-3">Server-side</p>
        <li>Express.js</li>
        <li>AWS (S3, Lambda)</li>
        <p className="font-bold my-3">CMS</p>
        <li>WordPress</li>
        <li>Contentful</li>
      </ul>
    </div>
  );
};

export default about;
