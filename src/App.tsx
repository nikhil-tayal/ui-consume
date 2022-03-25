import './App.css'
import { AppButton, Card, Input } from '@nikhil-tayal/ui-lib-2'
function App() {
  return (
    <div className="wrapper">
      <Card>
        <h1>Enter your details</h1>
        <Input variant='outlined' label='Enter your First Name ' />
        <br />
        <Input variant='standard' label='Enter your Last Name ' />
        <br />
        <Input variant='filled' label='Enter your Password ' type='password' />
        <br />
        <AppButton color='primary' variant='contained' onClick={() => alert('Data Saved')}>
          Button
        </AppButton>
      </Card>
    </div>
  );
}

export default App;
