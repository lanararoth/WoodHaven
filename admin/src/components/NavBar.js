import React from 'react'
import{NotificationsNone, Language,Settings} from "@material-ui/icons"
import styled from "styled-components";


const NavbarContainer = styled.div`
    width: 100%;
    height: 50px;
    background-color: white;
    position: sticky;
    top: 0;
    z-index: 999;
`
const NavbarWrapper = styled.div`
    height: 100%;
    padding: 0px 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;
`
const Logo = styled.span`
    font-weight: bold;
    font-size: 30px;
    color: maroon;
    cursor: pointer;
`
const TopLeft = styled.div``
const TopRight = styled.div`
    display: flex;
    align-items: center;
`
const IconContainer = styled.div`
    position: relative;
    cursor: pointer;
    margin-right: 10px;
    color: #555;
`
const IconBadge = styled.span`
    width: 15px;
    height: 15px;
    position: absolute;
    top: -5px;
    right: 0px;
    background-color: red;
    color: white;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 10px;
`
const Avatar = styled.img`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    cursor: pointer;
`


const NavBar = () => {
  return (
    <NavbarContainer>
      <NavbarWrapper>
        <TopLeft>
          <Logo>WoodHaven</Logo>
        </TopLeft>
        <TopRight>

          <IconContainer>
            <NotificationsNone/>
            <IconBadge>5</IconBadge>
          </IconContainer>

          <IconContainer>
            <Language/>
            <IconBadge>3</IconBadge>
          </IconContainer>

          <IconContainer>
            <Settings/>
          </IconContainer>

          <Avatar src={'/people.png'} alt=''/>

        </TopRight>
      </NavbarWrapper>
    </NavbarContainer>
  )
}

export default NavBar