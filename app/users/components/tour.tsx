import { useState } from "react"
import Joyride, { STATUS } from "react-joyride"

export default function Tour() {
    const [{ run, steps }, setState] = useState({
        run: true,
        steps: {
            content: <h2>Let's begin our journey!</h2>,
            locale: { skip: <strong>SKIP</strong> },
            placement: "center",
            target: "body"
            
        }
    })
    
    return(
        <Joyride
            continuous
            callback={() => {}}
            run={run}
            steps={steps}
            hideCloseButton
            scrollToFirstStep
            showProgress
            showSkipButton
            
        />
    )
}