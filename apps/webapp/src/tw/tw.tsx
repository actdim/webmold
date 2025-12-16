import './tw.css';
import { InputBox } from './inputBox';

function TwRoot() {
    return (
        <div className='w-[220px]'>
            <InputBox size='lg' value={'valid'}></InputBox>
            <InputBox size='md' invalid value={'invalid'}></InputBox>
        </div>
    );
}

export default TwRoot;
