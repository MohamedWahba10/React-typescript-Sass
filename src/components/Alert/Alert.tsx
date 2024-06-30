import { ReactNode } from 'react';
import './index.scss';
import {X} from 'lucide-react';
import { AlertTypes } from '../../types';

interface IProps {
  type : AlertTypes
  icon : ReactNode
  tittle : string
  description : string
}
export default function Alert({type , icon  , tittle , description}: IProps) {
    return (
      <div className={type}>
        <div className='alert-header'>
       
       <div className='tittle'>
         {icon}
       <h2>{tittle}</h2> 
        </div> 
            <span>
                <X />
            </span>
        </div>
        <p>{description}</p>
      </div>
      
    );
  }
