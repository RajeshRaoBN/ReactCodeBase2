import './App.css'
import Card from './components/Card'
import Counter from './components/Counter'
import FirstComp from './components/FirstComp'
import Greeting from './components/Greeting'
import IconComponent from './components/IconComponent'
import Password from './components/Password'
import Product from './components/Product'
import ProductInfo from './components/ProductInfo'
import Profile from './components/Profile'
import ProfileCard from './components/ProfileCard'
import SecondComp from './components/SecondComp'
import StyledCard from './components/StyledCard'
import ToDoList from './components/ToDoList'
import Weather from './components/Weather'

function App() {

  return (
    <>
      <div>
        {/* <SecondComp name="Robin" age="30" />
        <Product name="Laptop" price="1799" />
        <Card>
          <h1>This is the child</h1>
          <p>from the parent</p>
        </Card>
        <Password isvalid={false} />
        <Weather /> */}
        <StyledCard />
        <ProfileCard />
        <IconComponent />
        <Counter />
        <ToDoList />
        <Profile />
      </div>
    </>
  )
}

export default App
