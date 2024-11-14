// import "./App.css"; // Global styles
// import { Feed } from "@mui/icons-material";
import Header from "./components/Header/Header";
// import RightSidebar from "./components/RightSidebar/RightSidebar";
import Sidebar from "./components/Sidebar/Sidebar";
// import PostForm from "./components/Postform/postform";
// import Post from "./components/Post/Post";
import Footer from "./components/Footer/Footer";
// import { Feed } from "@mui/icons-material";

const App = () => {
  return (
    <div className="app">
      <Header />
      <div className="app__body">
        <Sidebar />
      </div>
      {/* <Trending/> */}
      <Footer />
    </div>
  );
};

export default App;
