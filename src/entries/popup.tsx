import React, { Suspense, use, useEffect, useState } from "react"
import { createRoot } from "react-dom/client"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import { Slider } from "@/components/ui/slider"
import { getOptions, storeOptions } from "@/storage"
import "../styles.css"

const optionsPromise = getOptions()

const Popup = () => {
  const options = use(optionsPromise)
  const [autoplay, setAutoplay] = useState(options.autoplay)
  const [autoplayDelay, setAutoplayDelay] = useState(options.autoplayDelay)

  useEffect(() => {
    const options = { autoplay, autoplayDelay }
    const timeout = setTimeout(() => {
      storeOptions(options)
    }, 100)

    return () => clearTimeout(timeout)
  }, [autoplay, autoplayDelay])

  return (
    <Suspense fallback={"Loading..."}>
      <div className="p-4 min-w-max">
        <div className="flex flex-col gap-4">
          <div className="flex gap-2">
            <Checkbox
              id="autoplay"
              checked={autoplay}
              onCheckedChange={checked =>
                setAutoplay(typeof checked === "boolean" && checked)
              }
            />
            <Label htmlFor="autoplay">Autoplay next video</Label>
          </div>
          <div className="flex flex-col gap-2">
            <Label htmlFor="autoplay-delay">
              Autoplay delay ({autoplayDelay}s)
            </Label>
            <Slider
              id="autoplay-delay"
              min={0}
              max={10}
              value={[autoplayDelay]}
              onValueChange={([value]) => setAutoplayDelay(value)}
            />
          </div>
        </div>
      </div>
    </Suspense>
  )
}

const root = createRoot(document.getElementById("root")!)

root.render(
  <React.StrictMode>
    <Popup />
  </React.StrictMode>
)
