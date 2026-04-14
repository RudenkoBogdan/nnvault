import type { QuartzComponentConstructor } from "../../quartz/components/types"
import script from "./functionPlot.inline"

export default (() => {
  function FunctionPlot() {
    return null // ничего не рисуем, только скрипт нужен
  }

  FunctionPlot.afterDOMLoaded = script
  return FunctionPlot
}) satisfies QuartzComponentConstructor
