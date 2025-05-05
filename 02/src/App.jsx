import ComponentLifeCycle from "./components/ComponentLifeCycle"
import DynamicAndConditionalStyle from "./components/StyleComponents/DynamicAndConditionalStyle"
import ExternalStyle from "./components/StyleComponents/ExternalStyle"
import InlineStyle from "./components/StyleComponents/InlineStyle"
import ModuleStyle from "./components/StyleComponents/ModuleStyle"
import UseEffectHook from "./components/useEffect/UseEffectHook"
import UseEffectProps from "./components/useEffect/UseEffectProps"
import './components/StyleComponents/css/style.css'

const App = () => {
  return (
    <>
      {/* <UseEffectHook /> */}

      {/* <UseEffectProps /> */}

      {/* <ComponentLifeCycle /> */}

      {/* <InlineStyle /> */}

      {/* <DynamicAndConditionalStyle /> */}

      <ExternalStyle />

      <ModuleStyle />
    </>
  )
}

export default App