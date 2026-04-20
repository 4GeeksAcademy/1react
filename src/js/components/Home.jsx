

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
import Navbar from "./Navbar";
import Card from "./Card";
import Footer from "./Footer";
import Header from "./Header";

//create your first component
const Home = () => {
	return (
		<div className="Home-container">

			<Navbar />

			<Header />

			<div className="d-flex gap-3 flex-wrap">
				<Card />
				<Card />
				<Card />
				<Card />
			</div>

			<Footer />

		</div>
	);
};

export default Home;