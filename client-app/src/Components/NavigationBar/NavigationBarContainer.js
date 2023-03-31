import NavigationBar from "./NavigationBar";
import tempLogo from "../../Images/templogo.png";
import "./NavigationBarContainer.css";

export default function NavigationBarContainer() {
  return (
    <div class="container">
      <div class="items">
        <img src={tempLogo} class="logo" />
        <NavigationBar />
      </div>
    </div>
  );
}
