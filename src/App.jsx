import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  const [bill, setBill] = useState(0);
  const [tipPercentage, setTipPercentage] = useState(0);
  const [numberOfPeople, setNumberOfPeople] = useState(1);

  const tipAmount = (bill * tipPercentage) / 100 / numberOfPeople;
  const totalAmountPerPerson = bill / numberOfPeople + tipAmount;

  const handleBillChange = (e) => {
    setBill(e.target.value);
  };

  const handleTipPercentageChange = (percentage) => {
    setTipPercentage(percentage);
  };

  const handleNumberOfPeopleChange = (e) => {
    setNumberOfPeople(e.target.value);
  };

  const handleReset = () => {
    setBill(0);
    setTipPercentage(0);
    setNumberOfPeople(0);
  };


  return (
    <body className='bg-[#c5e5e6] min-h-screen w-screen flex items-center justify-center'>
      <div className='flex flex-col items-center w-full md:w-3/5'>
        <div className='py-10 md:py-0 mb-0 md:mb-10'>
            <svg xmlns="http://www.w3.org/2000/svg" width="87" height="54"><path fill="#3D6666" d="M6.72 17.472c.944 0 1.792-.12 2.544-.36s1.392-.584 1.92-1.032a4.476 4.476 0 001.212-1.62c.28-.632.42-1.34.42-2.124v-.288c0-1.472-.464-2.584-1.392-3.336-.928-.752-2.272-1.288-4.032-1.608a14.615 14.615 0 01-1.74-.408c-.456-.144-.824-.308-1.104-.492-.28-.184-.476-.392-.588-.624a1.771 1.771 0 01-.168-.78c0-.56.232-1.004.696-1.332.464-.328 1.096-.492 1.896-.492.944 0 1.676.248 2.196.744.52.496.78 1.08.78 1.752v.576h3.168v-.864a5 5 0 00-.396-1.968 4.762 4.762 0 00-1.176-1.656C10.436 1.08 9.792.7 9.024.42 8.256.14 7.376 0 6.384 0c-.88 0-1.676.12-2.388.36s-1.32.576-1.824 1.008c-.504.432-.896.94-1.176 1.524-.28.584-.42 1.22-.42 1.908v.144c0 .832.144 1.536.432 2.112a3.978 3.978 0 001.212 1.44c.52.384 1.132.692 1.836.924.704.232 1.48.42 2.328.564.64.112 1.168.248 1.584.408.416.16.744.34.984.54s.408.424.504.672c.096.248.144.508.144.78 0 .576-.232 1.072-.696 1.488-.464.416-1.176.624-2.136.624-1.232 0-2.14-.3-2.724-.9-.584-.6-.876-1.404-.876-2.412v-.576H0v.72c0 .88.144 1.692.432 2.436a5.47 5.47 0 001.272 1.944c.56.552 1.26.984 2.1 1.296.84.312 1.812.468 2.916.468zm22-.336V10.8h3.408c.864 0 1.616-.144 2.256-.432a4.707 4.707 0 001.596-1.14 4.833 4.833 0 00.96-1.608c.216-.6.324-1.212.324-1.836v-.576c0-.608-.108-1.204-.324-1.788a4.625 4.625 0 00-.96-1.56A4.737 4.737 0 0034.384.756c-.64-.28-1.392-.42-2.256-.42h-6.576v16.8h3.168zm3.096-9.36H28.72V3.36h3.096c.704 0 1.26.192 1.668.576.408.384.612.88.612 1.488v.288c0 .608-.204 1.104-.612 1.488-.408.384-.964.576-1.668.576zm29.464 9.36v-3.024h-7.632V.336H50.48v16.8h10.8zm24.88 0v-3.024h-4.032V3.36h4.032V.336H74.928V3.36h4.032v10.752h-4.032v3.024H86.16zm-78.096 36V39.36h4.464v-3.024H.432v3.024h4.464v13.776h3.168zm24.688 0V39.36h4.464v-3.024H25.12v3.024h4.464v13.776h3.168zm28.624 0v-3.024h-7.728v-3.888H60.8V43.2h-7.152v-3.84h7.44v-3.024H50.48v16.8h10.896zm16.744 0V46.8h3.648c.464 0 .796.12.996.36.2.24.3.552.3.936v5.04h3.168v-5.808c0-.56-.164-1.024-.492-1.392-.328-.368-.772-.584-1.332-.648v-.432c.768-.32 1.336-.78 1.704-1.38a3.63 3.63 0 00.552-1.932v-.576c0-.64-.116-1.24-.348-1.8a4.332 4.332 0 00-1.008-1.476c-.44-.424-.988-.756-1.644-.996-.656-.24-1.416-.36-2.28-.36h-6.432v16.8h3.168zm3.024-9.36H78.12V39.36h3.024c.768 0 1.352.204 1.752.612.4.408.6.892.6 1.452v.288c0 .656-.2 1.164-.6 1.524-.4.36-.984.54-1.752.54z"/></svg>
        </div>

        
          <div className='md:flex bg-white p-8 rounded-3xl md:rounded-xl'>
                <div className=' '>
                    <div>
                      <p  className='text-[#01464b]  text-xl md:text-base font font-space-mono'>Bill</p>
                      <input placeholder='$' className='bg-[#f2f9fb] p-2  rounded-md w-full text-right text-[#00494D]  font-space-mono text-3xl md:text-xl font-bold' onChange={handleBillChange} value={bill} /> 
                    </div>

                    
                          <div className='mt-10'>
                              <p className=' text-xl md:text-sm mb-6 md:mb-2 m-2  text-[#01464b] font-space-mono'>Select Tip %</p>
                          </div>

                          <div className='grid  grid-cols-2 md:grid-cols-3 font-space-mono text-3xl md:text-lg font-bold gap-4 md:gap-4'>
                          
                          <button className={`py-2  rounded-md ${tipPercentage === 5 ? 'bg-[#29c0ab] text-[#01464b]' : 'bg-[#01464b] text-white'}`} onClick={() => handleTipPercentageChange(5)}>5%</button>
                          <button className={`py-2 w-  rounded-md ${tipPercentage === 10 ? 'bg-[#29c0ab] text-[#01464b]' : 'bg-[#01464b] text-white'}`} onClick={() => handleTipPercentageChange(10)}>10%</button>
                          <button className={`py-2 w-  rounded-md ${tipPercentage === 15 ? 'bg-[#29c0ab] text-[#01464b]' : 'bg-[#01464b] text-white'}`} onClick={() => handleTipPercentageChange(15)}>15%</button>
                          <button className={`py-2 w-  rounded-md ${tipPercentage === 25 ? 'bg-[#29c0ab] text-[#01464b]' : 'bg-[#01464b] text-white'}`} onClick={() => handleTipPercentageChange(25)}>25%</button>
                          <button className={`py-2 w-  rounded-md ${tipPercentage === 50 ? 'bg-[#29c0ab] text-[#01464b]' : 'bg-[#01464b] text-white'}`} onClick={() => handleTipPercentageChange(50)}>50%</button>
                          <input className='py-2 w rounded-md justify-center items-center text-[#01464b] placeholder:[#01464b] placeholder:text-center ' placeholder='Custom' ></input>

            
                            
                          </div>     


                        <div className='pb-10 md:pb-0'>
                        <div className='pt-10 pb-4 text-[#01464b] text-xl  md:text-base font-space-mono'>Number of people</div>
                        <input className= 'px-8 py-2 bg-[#f2f9fb] text-[#00494D] rounded-md w-full text-right font-space-mono text-3xl md:text-xl font-bold'   value={numberOfPeople}
                          onChange={handleNumberOfPeopleChange}></input>
                          </div>

                </div>


          <div className='bg-[#01464b] rounded-xl mx-0 md:ml-10 w-full md:w-2/3 flex flex-col justify-between '>
                    <div className="" >
                      <div className='flex justify-between px-8 mt-8'>
                          <div className=''>
                                <p className="text-[#b2cfcf] font-space-mono font-bold text-xl md:text-base" >Tip Amount</p>
                                <p className='text-base md:text-xs text-[#498288] font-bold font-space-mono' >/ person</p>
                          </div>
                                <div>
                                  <p className='text-4xl text-[#29c0ab] font-bold '> ${tipAmount.toFixed(2)}</p>
                                </div>
                       </div>
                       <div className='flex justify-between px-8 mt-8'>
                          <div className=''>
                                <p className='text-[#b2cfcf] font-space-mono font-bold text-xl md:text-base'>Total</p>
                                <p className='text-base md:text-xs text-[#498288] font-bold font-space-mono'>/ person</p>
                          </div>
                                <div>
                                  <p className='text-4xl font-bold text-[#29c0ab] '>  ${totalAmountPerPerson.toFixed(2)}</p>
                                </div>
                       </div>      
                    </div>
              <div className='px-8 py-2'>
                <button className='bg-[#29c0ab] text-[#06474d] p-2 mb-6 rounded-md w-full text-2xl font-bold my-10 py-2x' onClick={handleReset}> RESET</button>  
              </div>
          </div>
 
        </div>
      </div>
    
    </body>
  )
}

export default App
