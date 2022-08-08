import LearnLogs from './Components/learnLogs/LearnLogs';
import LogForm from './Components/logForm/LogForm';

const App = () => {
    return <>
    <LogForm className="card"></LogForm>
    <div className="learn-logs">
        <LearnLogs/>
    </div>
    </>;
};

export default App;