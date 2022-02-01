import {BsGithub, BsInstagram } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import './menu.css';

export default function Menu() {
  return (
    <div className='menu'>
      <a className='social' href='https://github.com/gabrielcs04' target='_blank'>
        <BsGithub size={24} color='#fff' />
      </a>

      <a className='social' href='https://instagram.com/gabriel.costa04' target='_blank'>
        <BsInstagram size={24} color='#fff' />
      </a>

      <Link className='menu-item' to='/links'>
        Meus Links
      </Link>
    </div>
  )
}