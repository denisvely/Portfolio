import React from "react";
import ReactFullpage from "@fullpage/react-fullpage";
import EntrySection from "../../components/Entry/EntrySection";
import About from "../../components/About/About";
import Last from '../../components/Last/Last';
import $export from "@fullpage/react-fullpage";


const anchors = ["Hello", "AboutMe", "Work"];

const Home = () => {
  return (
    <ReactFullpage
      anchors={anchors}
      navigation
      navigationTooltips={anchors}
      onLeave={(origin, destination, direction) => {
        console.log("onLeave event", { origin, destination, direction });
        
      }}
      render={({ state, fullpageApi }) => {
        console.log("render prop change", state, fullpageApi); // eslint-disable-line no-console

        return (
          <>
            <EntrySection />
            <About className="animate" />
            <Last />
          </>
        );
      }}
    />
  );
}

export default Home;
