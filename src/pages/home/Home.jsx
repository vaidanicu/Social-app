import Feed from "../../components/feed/Feed";
import Sidebar from "../../components/sidebar/Sidebar";
import RightBar from "../../components/rightbar/Rightbar";
import { Topbar } from "../../components/topbar/Topbar";
import "./home.css";
const Home = () => {
  return (
    <>
      <Topbar />
      <div className="homeContainer">
        <Sidebar />
        <Feed />
        <RightBar />
      </div>
    </>
  );
};

export default Home;
