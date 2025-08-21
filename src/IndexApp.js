import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import Home from './Home'
import Photo from './Photo'

function IndexApp() {
    return (
        <Router>
            <Routes>
                <Route path={'/'} element={<Home />} />
                <Route path={'/photo'} element={<Photo />} />
            </Routes>
        </Router>
    );
}

export default IndexApp;