import React, {useState} from 'react';
// import { List, AutoSizer } from 'react-virtualized';
import { FixedSizeList as List } from 'react-window';
import AutoSizer from 'react-virtualized-auto-sizer';


function generateList(size) {
    let arr = [];
    for (let i = 1; i <= size; i++) {
        arr.push(i);
    }
    return arr;
}

const VirtualizationAndWindowing = () => {
    const [items, setItems] = useState([]);

    const handleGenerateList = () => {
        setItems(generateList(10000));
    };

    const rowRenderer = ({key, index, style}) => (
            <div key={key} style={style}>
                {items[index]}
            </div>
        );    

    return (
        <div>
            <button onClick={handleGenerateList}>Generate Large List</button>
            <div style={{width: "100%", height: "400px"}} >
                {/* {items.map((item) => (
                    <div key={item}>{item}</div>
                ))} */}
                <AutoSizer>
                    {({width, height}) => 
                        <List 
                            width={width}
                            height={height}
                            itemCount={items.length}
                            itemSize={40} 
                        >{rowRenderer}</List>
                    }
                </AutoSizer>
            </div>
        </div>
    )
}

export default VirtualizationAndWindowing
