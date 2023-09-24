import React, { useState,useEffect } from 'react';
import './Header.css'; // Assuming you have defined the CSS for your header
import { FaAmazon, FaBars, FaIcicles, FaTimes } from "react-icons/fa"; // Import the icons you need
import { Menu, Button, Text } from '@mantine/core';
import axios from 'axios';


function Header() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [userDetails, setUserDetails] = useState([]);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  useEffect(() => {
  const userId=localStorage.getItem('id')
  const token=localStorage.getItem('token')

  axios.get(`http://localhost:8080/users/userDetails/${userId}`, {
    headers: {
      'Authorization': `Bearer ${token}`
    }
  })
  .then((response) => {
    setUserDetails(response.data);
    console.log(response.data);
  })
  .catch((error) => {
    console.error("error while fetching", error);
  })
}, []);
  

  return (
    <div className='header'>
      <div className='navbar'>
        <div className='logo'>
          <a href='/'>Academia</a>
        </div>
        <ul className='links'>
          <li><a href='/course'>Courses</a></li>
          <li><a href='/enrolled'>MyCourses</a></li>
          <li><a href='/'>Events</a></li>
        </ul>
        <div className='action_btn'><Menu width={300}>
          <Menu.Target>
            <div className='profile-btn' >
            {userDetails?.name?.charAt(0)?.toUpperCase()}
            </div>
          </Menu.Target>

          <Menu.Dropdown>
            {/* <Menu.Label>Application</Menu.Label> */}
            <Menu.Item icon={
              <div className='drop-action_btn'>
                <div className='drop-profile-btn'>
                  S
                </div>
              </div>}>

            
    <div className='profile-drop' key={userDetails.id}>
      <div className='name'>{userDetails.name}</div>
      <div className='email'>{userDetails.email}</div>
    </div>

             

            </Menu.Item>
            {/* <Menu.Item icon={<FaAmazon size={14} />}>srimurugharaj05509@gmail.com</Menu.Item>
        <Menu.Item icon={<FaAmazon size={14} />}>Gallery</Menu.Item>
        <Menu.Item
          icon={<FaAmazon size={14} />}
          rightSection={<Text size="xs" color="dimmed">⌘K</Text>}
        >
          Search
        </Menu.Item> */}

            <Menu.Divider />

            <Menu.Label>Danger zone</Menu.Label>
            <Menu.Item icon={<FaAmazon size={14} />}>Notification</Menu.Item>
            <Menu.Item icon={<FaAmazon size={14} />}>Message</Menu.Item>
            <Menu.Item icon={<FaAmazon size={14} />}>Account Settings</Menu.Item>
            <Menu.Divider/>
            <Menu.Item icon={<FaAmazon size={14} />}>Help</Menu.Item>
            <Menu.Item color="red" icon={<FaAmazon size={14} />}>Log out</Menu.Item>
          </Menu.Dropdown>
        </Menu></div>
        <div className='toggle_btn' onClick={toggleDropdown}>
          {isDropdownOpen ? <FaTimes /> : <FaBars />}
        </div>

      </div>

      <div className={`dropdown_menu ${isDropdownOpen ? 'open' : ''}`}>
        <ul>
          <li><a href='/'>Courses</a></li>
          <li><a href='/'>MyCourses</a></li>
          <li><a href='/'>Events</a></li>
        </ul>
        {/* <a href='#' className='action_btn'>Get Started</a> */}
      </div>
    </div>
  );
}

export default Header;
