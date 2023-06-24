import "./podcast.css";

export function Podcast() {
  // const [state,setState] = useState<string>("")
  // const ref : HTMLInputElement | null = document.querySelector("#input")
  // const debounce = (ref : HTMLInputElement, setState : React.Dispatch<React.SetStateAction<string>> , time : number) => {
  //   const [timerOn,setTimerOn] = useState<boolean>(false)
  //   if (ref != null) {
  //     ref.onchange()
  //   }
  // }

  return (
    <div>
      {/* <input  type="text" id='input' className='text-2xl border-2 border-slate-700' />
      <div>{state}</div> */}
      <div className="flex justify-center items-center w-screen h-[calc(100vh-5rem)] bg-red-300">
        <div className="circle w-[400px] h-[400px] bg-green-600 rounded-full hover:rotate-[480deg] duration-[2s] relative flex justify-center items-end">
          <p className="absolute w-full h-full border-2 border-black flex justify-center items-center">
            <p className="h-[50%] w-full absolute items-end">text</p>
          </p>
        </div>
      </div>
    </div>
  );
}
