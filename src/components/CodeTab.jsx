import { useDispatch } from 'react-redux'
import { updateCode } from '../features/tabs'


export default function CodeTab({code, id}) {

  const dispatch = useDispatch()

  return (
    <textarea
    onChange={e => dispatch(updateCode({id, value:e.target.value}))}
    value={code}
    className='block p-8 size-full text-xl bg-slate-900 text-slate-100 outline-none resize-none'
    spellCheck="false"
    ></textarea>
  )
}
