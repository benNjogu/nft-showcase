import { Download, Features, SectionWrapper } from "./components";
import assets from "./assets";

const App = () => {
  return (
    <>
      <SectionWrapper
        title="Your own Store of Nifty NFTs. Start Selling & Growing."
        description="Buy, Store, Collect NFTs, exchange and earn crypto. Join 25+ million people using ProNef Marketplace."
        showBtn
        mockupImg={assets.homeHero}
        banner="banner"
      />
      <SectionWrapper
        title="Smart User Interface Marketplace."
        description="Experience a Buttery UI of ProfNef NFT Marketplace. Smooth constant colors of a fluent UI design"
        mockupImg={assets.homeCards}
        reverse
      />
      <Features />
      <SectionWrapper
        title="Deployment"
        description="ProNef is built using Expo which runs natively on all users devices. You can easily get your app into people's hands."
        mockupImg={assets.feature}
        reverse
      />
      <SectionWrapper
        title="Creative way to showcase the store."
        description="The app contains two screens. The first screen lists all NFTs while the second screen shows the details of a specific NFT."
        mockupImg={assets.mockup}
        banner="banner02"
      />
    </>
  );
};

export default App;
