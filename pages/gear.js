import Emoji from "../components/Emoji";
const gear = () => {
  return (
    <div className='flex flex-col-reverse lg:flex-row'>
      <div className='lg:w-1/2 lg:pr-12'>
        <h1 className='font-bold text-4xl mb-6 mt-5 lg:mt-0'>Gear</h1>

        <p className='text-gray-500'>
          See what sort of setup I'm rocking{" "}
          <Emoji label='guitar' symbol='🎸' />
        </p>

        <p className='mt-6'>
          <strong>Why two machines? </strong> I tend to use my Windows PC for
          Gaming and sometimes coding, but if I'm working on something front-end
          intensive, I will always favour my Mac.
        </p>

        <h2 className='font-bold text-2xl mt-8 mb-6'>Peripherals</h2>
        <p>
          <ul>
            <li>Razer Blackwidow Chroma V2</li>
            <li>Logitech MX Master</li>
            <li>LG UltraGear 27GL83A-B 27" 144hz</li>
            <li>BenQ GW2470H 23.7" 60hz</li>
            <li>Knox Cardiod Dynamic Podcast Mic</li>
            <li>SteelSeries Arctis 7 Wireless</li>
          </ul>
        </p>

        <h2 className='font-bold text-2xl mt-8 mb-6'>Windows PC</h2>
        <p>
          <ul>
            <li>Windows 10 Pro</li>
            <li>Intel Core i7 9700k</li>
            <li>Gigabyte GeForce 1050Ti</li>
            <li>24GB RAM</li>
          </ul>
        </p>

        <h2 className='font-bold text-2xl mt-8 mb-6'>MacBook Pro</h2>
        <p>
          <ul>
            <li>MacBook Pro 13" (2020 Model)</li>
            <li>Intel Core i5</li>
            <li>8GB RAM</li>
            <li>120GB SSD</li>
          </ul>
        </p>
      </div>

      <div className='lg:w-1/2'>
        <div className='flex flex-col lg:flex-row'>
          <div className='lg:mx-auto lg:w-1/2 lg:h-1/2'>
            {/* <Image
              src='/me_bw.jpg'
              alt='Ingus Jansons'
              width={450}
              height={450}
            /> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default gear;
