import React,{useState} from "react";
const Icount = () => {

    const [counter, setCounter] = useState(1);
	const handlerCounterUp = () => {
        if(counter<58){
            setCounter(counter + 1);
        }
	};

	const handlerCounterDown = () => {
        if(counter>0){
	setCounter(counter - 1);
        }
	
	};
	const onClick = () => {
		alert('click');
	};

	const myNumber = 58;
    return(
        <div className='CounterSection'>
				<p>Counter: {counter}</p>
				<div className='btn-section'>
					<button onClick={handlerCounterUp}>Incrementar</button>
					<button onClick={handlerCounterDown}>Decrementar</button>
				</div>

			</div>
    );

};
export default Icount;