import Anasayfa from "./Anasayfa";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Form from './components/form/Form';
import NotFound from "./components/NotFound";

const App = () => {
    return (
        <Router>
            <Switch>

                <Route exact path="/" component={Anasayfa} />
                <Route path="/add" component={Form} />
                <Route path="*" component={NotFound} />
            </Switch>
        </Router>
    )
}
export default App
