import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import TermsAndConditions from "./pages/TermsAndConditions";
import MainContent from "./sections/MainContent";

const App = () => {
	return (
		<Router>
			<Routes>
				<Route path="/" element={<MainContent />} />
				<Route path="/terms" element={<TermsAndConditions />} />
			</Routes>
		</Router>
	);
};

export default App;
