import functionPlot from "function-plot"

const initPlots = () => {
  document.querySelectorAll(".quartz-function-plot").forEach((el) => {
    const target = el as HTMLElement
    const fn = target.dataset.fn || "x"
    const title = target.dataset.title || ""
    const xmin = parseFloat(target.dataset.xmin ?? "-10")
    const xmax = parseFloat(target.dataset.xmax ?? "10")
    const ymin = parseFloat(target.dataset.ymin ?? "-5")
    const ymax = parseFloat(target.dataset.ymax ?? "5")

    try {
      functionPlot({
        target: target,
        data: [{ fn, color: "#3b82f6" }],
        title,
        xAxis: { domain: [xmin, xmax] },
        yAxis: { domain: [ymin, ymax] },
        grid: true,
        width: target.clientWidth || 600,
        height: 400,
      })
    } catch (e) {
      console.error("Function plot error", e)
    }
  })
}

document.addEventListener("nav", initPlots)

export default initPlots
