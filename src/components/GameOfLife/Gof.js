import React, { useState, useCallback, useEffect} from "react";

const numRow = 17;
const numCol = 45;

const Gof = () => {
    const [grid, setGrid] = useState(() => {
        const row = [];
        for(let i = 0; i < numRow; i++) {
            row.push(Array.from(Array(numCol), () => (Math.random() > 0.45 ? 1 : 0)));
        }
        return row;
    });

    const start = useCallback( () => {
        const countNeighbors = (x, y) => {
            let sum = 0;
            for(let i = -1; i < 2; i++) {
                for(let j = -1; j < 2; j++) {
                    try {
                        var col = (x + i + numCol) % numCol;
                        var row = (y + j + numRow) % numRow;
                        sum += grid[col][row];
                    } catch {
                        sum += 0;
                    }
                }
            }
            sum -= grid[x][y];
            return sum;
        };

        let next = new Array(numRow).fill(0).map(() => new Array(numCol).fill(0))

        for(let i = 0; i < numRow; i++) {
            for(let j = 0; j < numCol; j++) {
                let cur = grid[i][j];

                let neighbors = 0;
                neighbors = countNeighbors(i, j);

                if(cur === 0 && neighbors === 3) next[i][j] = 1;
                else if(cur === 1 && (neighbors < 2 || neighbors > 3)) next[i][j] = 0;
                else next[i][j] = cur;
            }
        }

        setGrid(next);
    }, [grid]); 

    // useEffect(() => {
    //     setTimeout(start, 300);
    // }, [grid, start]);

    return (
        <div>
            <div style={{
                overflow: 'hidden',
                display: 'grid',
                gridTemplateColumns: `repeat(${numCol}, 32px)`,
            }}>
                {grid.map((row, i) => 
                    row.map((col, j) => <div key={`${i}, ${j}`}
                        style={{
                            width: 32, 
                            height: 32,
                            backgroundColor: grid[i][j] ? 'rgb(48, 48, 48)' : 'rgb(0,23,54)',
                            border: "solid 1px rgb(0,23,54)"
                        }}
                        />)
                )}
            </div>
        </div>
    );
}

export default Gof;