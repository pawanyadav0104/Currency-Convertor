import { useState } from 'react';
import Input from './components/input';
import useCurrencyInfo from './hooks/useCurrencyInfo';
import './App.css';

function App() {
    const [amount, setAmount] = useState(0);
    const [from, setFrom] = useState("inr");
    const [to, setTo] = useState("usd");
    const [convertedAmount, setConvertedAmount] = useState(0);

    const currencyInfo = useCurrencyInfo(from);
    const options = Object.keys(currencyInfo);

    const swap = () => {
        setFrom(to);
        setTo(from);
        const newConvertedAmount = (amount * currencyInfo[to]) / currencyInfo[from];
        setConvertedAmount(newConvertedAmount);
        setAmount(newConvertedAmount);
    };

    const convert = () => {
        const newConvertedAmount = (amount * currencyInfo[to]) / currencyInfo[from];
        setConvertedAmount(newConvertedAmount);
    };

    return (
        <>
            <h1 className='text-4xl font-bold text-white bg-blue-500 p-4 rounded-lg shadow-lg text-center'>Currency Converter</h1>


            <br></br>
            <br></br>
<br />            <div className='w-full'>
                <div className='w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30'>
                    <form 
                        onSubmit={(e) => {
                            e.preventDefault();
                            convert();
                        }}>
                        <div className='flex flex-col mb-4'>
                            <Input 
                                label="From" 
                                amount={amount}
                                currencyOption={options}
                                onCurrencyChange={(currency) => setFrom(currency)}
                                selectCurrency={from} 
                                onAmountChange={(amount) => setAmount(amount)}
                            />
                            <button
                                type="button"
                                className="my-2 border border-2 border-white rounded-md bg-blue-600 text-white px-2 py-1 self-center"
                                onClick={swap}
                            >
                                Swap
                            </button>
                            <Input
                                label="To" 
                                amount={convertedAmount}
                                currencyOption={options}
                                onCurrencyChange={(currency) => setTo(currency)}
                                selectCurrency={to}
                                amountDisable
                            />
                        </div>
                        <button type="submit" className='w-full bg-blue-600 text-white px-4 py-3 rounded-lg'>
                            Convert {from.toUpperCase()} to {to.toUpperCase()}
                        </button>
                    </form>
                </div>
            </div>
        </>
    );
}

export default App;