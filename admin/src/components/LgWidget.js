import React from 'react';
import styled from 'styled-components';
import { useState } from 'react';
import products from '../assets/data/products';

const LgWidgetContainer = styled.div`
    flex: 2;
    -webkit-box-shadow: 0px 0px 15px -10px rgba(0, 0, 0, 0.75);
    box-shadow: 0px 0px 15px -10px rgba(0, 0, 0, 0.75);
    padding: 20px;
`;

const LgWidgetTitle = styled.h3`
    font-size: 22px;
    font-weight: 600;
`;

const LgWidgetButton = styled.button`
    padding: 5px 7px;
    border: none;
    border-radius: 10px;
    background-color:${props => props.bgColor || "#ebf1fe"};
    color:${props => props.fdColor || "#2a7ade"};
`;

const LgWidgetTable = styled.table`
    width: 100%;
    border-spacing: 20px;
`;

const LgWidgetTh = styled.th`
    text-align: left;
`;

const LgWidgetUser = styled.td`
    display: flex;
    align-items: center;
    font-weight: 600;
`;

const LgWidgetImg = styled.img`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    object-fit: cover;
    margin-right: 10px;
`;

const LightTd = styled.td`
    font-weight: 300;
`;

const TableBodyContainer = styled.div`
    max-height: 300px; /* Adjust as needed */
    overflow-y: auto;
`;

const LgWidget = () => {
    const [productData, setProductData] = useState(products);
 
    return (
        <LgWidgetContainer>
            <LgWidgetTitle>Latest Products</LgWidgetTitle>
            <TableBodyContainer>
                <LgWidgetTable>
                    <thead>
                        <tr>
                            <LgWidgetTh>imgUrl</LgWidgetTh>
                            <LgWidgetTh>id</LgWidgetTh>
                            <LgWidgetTh>productName</LgWidgetTh>
                            <LgWidgetTh>price</LgWidgetTh>
                        </tr>
                    </thead>
                    <tbody>
                        {productData.map(item => (
                            <tr key={item.id}>
                                <LgWidgetUser>
                                    <LgWidgetImg src={item.avatar} alt={item.imgUrl}/>
                                </LgWidgetUser>
                                <LightTd>{item.id}</LightTd>
                                <LightTd>{item.productName}</LightTd>
                                <td>
                                    <LgWidgetButton bgColor={item.bgColor} fdColor={item.fdColor}>
                                        {item.price}
                                    </LgWidgetButton>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </LgWidgetTable>
            </TableBodyContainer>
        </LgWidgetContainer>
    );
};

export default LgWidget;