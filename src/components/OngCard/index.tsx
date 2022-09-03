import React from 'react'
import styled from 'styled-components'


type OngCardsProps = {
    name : string,
    description : string,
    meta : number ,
    valorAtual : number,
    image : string
}
export default function OngCard(props:OngCardsProps) {
  return (
    <OngCardContainer>
        <img src={props.image} alt="" />
        <div className="card-content">
            <h1 className="ong-title">
                {props.name}
            </h1>
            
            <div className="meta-info">
                <p className="meta-title">
                    {props.description}
                </p>
                <span className='meta-valor'>
                   R$ {props.meta}
                </span>
            </div>

            <progress id="meta" value={props.valorAtual} max={props.meta}> 32% </progress>
        </div>
    </OngCardContainer>
  )
}


const OngCardContainer = styled.div`

    max-width: 342px;
    display: flex;
    
    width: 100%;
    width: 342px;
    gap: 18px ;
    align-items: center;

    img {
        width: 100px;
        height: 100px;
    }

    .card-content {
        .ong-title {
            font-weight: 700;
            font-size: 16px;
            text-transform: capitalize;
            color: #332F30;
        }

        .meta-title {
            font-style: normal;
            font-weight: 500;
            font-size: 10px;
            color:#727171;
            text-transform: capitalize;

            


        }

        .meta-info{
            display: flex;
            align-items: center;
            justify-content: flex-start;
            gap: 10px;
        }
        .meta-valor{
            font-weight: 700;
            font-size: 8px;
            color: rgba(21, 21, 21, 0.6);
        }

        progress {
            width: 100%;
            height: 6px;
            &[value] {
                color: red;
            }
            
        }
    }
`
