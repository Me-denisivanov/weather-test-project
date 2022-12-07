import { Container } from '@mui/system';
import { Search } from '../components/Search/Search';
import { Header } from '../widgets/Header';
import { AppRouter } from './providers/router';

function App() {
    return (
        <div className="App">
            <Header />
            <Container>
                <Search />
                <AppRouter />
            </Container>
        </div>
    );
}

export default App;
