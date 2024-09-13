import PreviewButton from './components/PreviewButton';
import Tabs from './components/Tabs';

export default function App() {
  return (
    <div className='min-h-screen bg-slate-900 flex flex-col'>
        <div className="px-4 py-4 border-b flex items-center">
          <h1 className='w-full text-xl text-slate-100'>
            <span className='text-base'>the</span>
            SmartIDE
          </h1>
          <div className="w-full">
            <PreviewButton />
          </div>
          <div className="w-full flex">
            <div className="ml-auto mr-3">
              <div className="size-[6px] bg-slate-200 rounded-full my-1"></div>
              <div className="size-[6px] bg-slate-200 rounded-full my-1"></div>
              <div className="size-[6px] bg-slate-200 rounded-full"></div>
            </div>
          </div>
        </div>
        <Tabs />
    </div>
  )
}
