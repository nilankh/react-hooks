import React from "react";
import "./App.css";
// import ClassCounter from './components/ClassCounter';
import HookCounter from './components/HookCounter';
import ReviseCounter from "./components/ReviseCounter";
import ClassCounterTwo from "./components/ClassCounterTwo";
// import HookCounterTwo from "./components/HookCounterTwo";
// import HookCounter3 from "./components/HookCounter3";
// import HookCounter4 from "./components/HookCounter4";
// import ClassCounterOOne from "./components/ClassCounterOOne";
// import HookCounterOne from "./components/HookCounterOne";
// import HookCounterOOne from "./components/HookCounterOOne";
// import ClassMouse from "./components/ClassMouse";
// import HookMouse from "./components/HookMouse";
// import MouseContainer from "./components/MouseContainer";
// import IntervalClassCounter from "./components/IntervalClassCounter";
// import IntervalHookCounter from "./components/IntervalHookCounter";
// import DataFetching from "./components/DataFetching";
// import DataFetching2 from "./components/DataFetching2";
// import DataFetching3 from "./components/DataFetching3";
// import ComponentC from "./components/ComponentC";
// import CounterOne from "./components/CounterOne";
// import CounterTwo from "./components/CounterTwo";
// import CounterThree from "./components/CounterThree";

export const UserContext = React.createContext();
export const ChannelContext = React.createContext();
function App() {
  return (
    <div className="App">
      <ClassCounterTwo />
      <ReviseCounter />
      {/* <CounterThree /> */}
      {/* <CounterTwo /> */}
      {/* <CounterOne /> */}
      {/* <UserContext.Provider value={"Nilank"}>
        <ChannelContext.Provider value={'Ninja'}>
          <ComponentC />
        </ChannelContext.Provider>
      </UserContext.Provider> */}


      {/* <DataFetching3 /> */}
      {/* <DataFetching2 /> */}
      {/* <DataFetching /> */}
      {/* <IntervalHookCounter />
      <IntervalClassCounter /> */}
      {/* <MouseContainer /> */}
      {/* <HookMouse /> */}
      {/* <ClassMouse /> */}
      {/* <HookCounterOOne /> */}
      {/* <ClassCounterOOne /> */}
      {/* <HookCounterOne /> */}
      {/* <ClassCounterOne /> */}
      {/* <HookCounter4 /> */}
      {/* <HookCounter3 /> */}
      {/* <HookCounterTwo /> */}
      {/* <HookCounter /> */}
      {/* <ClassCounter /> */}
    </div>
  );
}

export default App;
