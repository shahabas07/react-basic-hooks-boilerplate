import { useContext, useState, useEffect, useRef } from "react";
import { ToggleTheme } from "../App";

function UseContext() {
  const isMounted = useRef(false);
  const theme = useContext(ToggleTheme);
  const themeStyle = {
    backgroundColor: theme ? "black" : "grey",
    color: theme ? "grey" : "black",
    padding: "2rem",
    margin: "2rem",
  };
  const [shabs, setshabs] = useState(0);
  const [showParagraph, setShowParagraph] = useState(false);

  useEffect(() => {
    if (isMounted) {
      alert("Content button clicked");
    } else {
      isMounted == true;
    }
  }, [showParagraph]);

  const toggleParagraph = () => {
    setShowParagraph(!showParagraph);
  };

  const paragraph = () => {
    return (
      <>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. 
        Reiciendis architecto in impedit, corrupti minus possimus 
        cumque quod officiis incidunt velit expedita. Magnam accusantium 
        repellendus ratione corporis, consequatur quis. Magni, deserunt?
      </>
    );
  };

  return (
    <>
      <div style={themeStyle} className="box">
        This is made by Kalvium
        <br />
        <button onClick={toggleParagraph}>Content</button>
        <br />
        {showParagraph && paragraph()}
        <div className="shabs">{shabs}</div>
        <button onClick={() => setshabs(shabs + 1)}>Like</button>
      </div>
    </>
  );
}
export default UseContext;