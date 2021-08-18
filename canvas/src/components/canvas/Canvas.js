import CanvasDraw from "react-canvas-draw";
import { useState } from "react";

function Canvas() {
    const [canvas, setCanvas] = useState("#000000");
    const [brush, setBrush] = useState(1);

    let modify = null

    return (
        <div>
            <CanvasDraw
                style={{margin: '40px'}}
                ref={(canvasDraw) => (modify = canvasDraw)}
                brushColor={canvas}
                brushRadius={brush}
                canvasWidth="70vw"
                canvasHeight="80vh"
                hideGrid={true}
            />
            <div style={{display: 'flex', justifyContent: 'center'}}>
                <input
                    type="color"
                    value={canvas}
                    onChange={(event) => {
                        setCanvas(event.target.value);
                    }}
                />
                <input
                    min="1"
                    max="50"
                    type="range"
                    value={brush}
                    onChange={(event) => {
                        setBrush(event.target.value);
                    }}
                />
                <button
                    onClick={() => {
                    modify.clear();
                    }}
                >
                    CLEAR
                </button>
            </div>
        </div>
    );
}
export default Canvas;
