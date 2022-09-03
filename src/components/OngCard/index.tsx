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

            <div className='botao-doar'>

                <svg width="13" height="13" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9.33325 0.166656C7.72325 0.166656 6.41658 1.47332 6.41658 3.08332C6.41658 4.69332 7.72325 5.99999 9.33325 5.99999C10.9433 5.99999 12.2499 4.69332 12.2499 3.08332C12.2499 1.47332 10.9433 0.166656 9.33325 0.166656ZM9.33325 4.83332C8.36492 4.83332 7.58325 4.05166 7.58325 3.08332C7.58325 2.11499 8.36492 1.33332 9.33325 1.33332C10.3016 1.33332 11.0833 2.11499 11.0833 3.08332C11.0833 4.05166 10.3016 4.83332 9.33325 4.83332ZM11.0833 8.33332H9.91658C9.91658 7.63332 9.47908 7.00332 8.82575 6.75832L5.23242 5.41666H0.583252V11.8333H4.08325V10.9933L8.16658 12.125L12.8333 10.6667V10.0833C12.8333 9.11499 12.0516 8.33332 11.0833 8.33332ZM2.91659 10.6667H1.74992V6.58332H2.91659V10.6667ZM8.14909 10.9058L4.08325 9.79166V6.58332H5.02242L8.41742 7.84916C8.61575 7.92499 8.74992 8.11749 8.74992 8.33332C8.74992 8.33332 7.58325 8.30416 7.40825 8.24582L6.01992 7.78499L5.65242 8.89332L7.04075 9.35416C7.33825 9.45332 7.64742 9.49999 7.96242 9.49999H11.0833C11.3108 9.49999 11.5149 9.63999 11.6083 9.83249L8.14909 10.9058Z" fill="#3F3C3D"/>
                </svg>

                <span>
                    Doar fundos
                </span>

            </div>
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
    justify-content: center;

    img {
        width: 100px;
        height: 100px;
        box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.25);
        border-radius: 16px;
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

        .botao-doar {
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 10px;
            padding: 6px 0 ;
            margin-top: 8px;

            box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.25);
            border-radius: 24px;
            min-width: 219px;

            border: 1px solid black;
            span {
                font-weight: 700;
                font-size: 10px;
                color: #3F3C3D;

            }
        }
    }
`
