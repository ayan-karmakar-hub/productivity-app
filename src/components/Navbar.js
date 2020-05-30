import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className='navbar navbar-dark bg-primary'>
      <div className='container-fluid'>
        <div className='navbar-header'>
          <Link to='/' className='navbar-brand' href='#'>
            Home
          </Link>
          <Link to='/today-view' className='navbar-brand' href='#'>
            Today's View
          </Link>
          <Link to='/calendar' className='navbar-brand' href='#'>
            Calendar
          </Link>
          <Link to='/pomodoro' className='navbar-brand' href='#'>
            Pomodoro Clock
          </Link>
        </div>
        <Link
          to='/create-task'
          className='my-2 my-lg-0 btn my-2 my-sm-0'
          type='submit'
          style={{
            color: 'white',
            border: '1px solid white',
          }}
        >
          Add a Task
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
