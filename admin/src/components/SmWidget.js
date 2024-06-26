import { useEffect, useState } from "react";
import { Visibility } from "@material-ui/icons";
import axios from "axios";
import styled from "styled-components";

const SmWidgetContainer = styled.div`
    flex: 1;
    box-shadow: 0px 0px 15px -10px rgba(0, 0, 0, 0.75);
    padding: 20px;
    margin-right: 20px;
`
const SmWidgetTitle = styled.span`
    font-size: 22px;
    font-weight: 600;
`
const SmWidgetImg = styled.img`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    object-fit: cover;
`
const SmWidgetList = styled.ul`
    margin: 0;
    padding: 0;
    list-style: none;
    .SmWidgetListItem{
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin: 20px 0px;
    }
`
const SmWidgetUser = styled.div`
    display: flex;
    flex-direction: column;
    .SmWidgetUsername{
        font-weight: 600;
    }
.SmWidgetUserTitle{
        font-weight: 300;
    }
`
const SmWidgetButton = styled.button`
    display: flex;
    align-items: center;
    border: none;
    border-radius: 10px;
    padding: 7px 10px;
    background-color: #eeeef7;
    color: #555;
    cursor: pointer;
    .SmWidgetIcon{
        font-size: 16px !important;
        margin-right: 5px;
    }
`

const SmWidget = () => {
    const [newMemberRows, setNewMemberRows] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:5000/userList")
            .then(response => {
                console.log(response.data);
                setNewMemberRows(response.data);
            })
            .catch(error => {
                console.error("Error fetching new members:", error);
            });
    }, []);

    return (
        <SmWidgetContainer>
            <SmWidgetTitle>New Members</SmWidgetTitle>
            <SmWidgetList>
                {newMemberRows.map(member => (
                    <li key={member.id} className="SmWidgetListItem">
                        <SmWidgetImg src={member.avatar} alt={member.username} />
                        <SmWidgetUser>
                            <span className="SmWidgetUsername">{member.firstName}</span>
                            <span className="SmWidgetUserTitle">{member.lastName}</span>
                        </SmWidgetUser>
                        <SmWidgetButton>
                            <Visibility className="SmWidgetIcon" />
                            Display
                        </SmWidgetButton>
                    </li>
                ))}
            </SmWidgetList>
        </SmWidgetContainer>
    );
}

export default SmWidget;