import { useSelector } from 'react-redux';
import CodeTab from './CodeTab';
import ButtonTab from './ButtonTab';
import { useState } from 'react';
import Preview from './Preview';

export default function Tabs() {

  const tabs = useSelector(state => state.tabs)
  const previewData = useSelector(state => state.preview)
  const [tabIndex, setTabIndex] = useState(tabs[0].id)

  return (
    <div className='flex grow'>
      <div className="flex text-slate-100 grow flex-col w-[175px] border-r border-slate-100 shrink-0">
        {tabs.map(tab => (
          <ButtonTab
          key={tab.id}
          id={tab.id}
          toggleTab={id => setTabIndex(id)}
          buttonContent={tab.buttonContent}
          imgURL={tab.imgURL}
          />
        ))}
      </div>
      <div className="w-full relative">
        <CodeTab
        id={tabIndex}
        code={tabs.find(obj => obj.id === tabIndex).code}
        />
        {previewData.preview && <Preview />}
        
      </div>
    </div>
  )
}
