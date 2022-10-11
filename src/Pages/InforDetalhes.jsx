import Header from "../components/header";
import { useParams } from "react-router-dom";
import { useState } from 'react';
import { useEffect } from "react";
import Modal from "react-modal";
import './InforDetalhes.css'
import { adcDestino } from '../Features/Counter/counterSlice'
import { useDispatch } from 'react-redux'

Modal.setAppElement("#root");

function InforDetalhes () {

    const parametros = useParams ()
    const [dados, setDados] = useState()
    const [modalIsOpen, setIsOpen] = useState (false);
    const dispatch = useDispatch ()

 


    
    function BuscarDados () {
        fetch (`https://restcountries.com/v3.1/name/${parametros.informacaoBandeira}?fullText=true`)
        .then (res => {
            return res.json()
        }).then ((data) => {
            console.log(data)
            setDados(data[0])
        }) 
    }

    useEffect ( () => {
        BuscarDados ()
    }, [])

 
    function openModal () {
        setIsOpen(true);
    }

    function closeModal () {
        setIsOpen(false);
    }

    function btnAdicionar () {
        dispatch(adcDestino({
            ...dados,
            ID: Date.now()
        }))
        openModal()
    }


    return (
        <>
        <Header/>
            <h2>Nome Oficial: {parametros.informacaoBandeira}</h2>
            <img src={dados?.flags.png}/>
            <p>Capital: &nbsp; {dados?.capital}</p>
            <button className="btnAdc" onClick={btnAdicionar}>Adicionar aos meus destinos</button>

         
            <Modal 
            isOpen={modalIsOpen}
            onRequestClose={closeModal}
            contentLabel="Example Modal"
            overlayClassName="modal-overlay"
            className="modal-content"
            >
                <h1 className="titleModal">Destino adicionado com sucesso!</h1>
                <div className="checkModal">
                    <span class="material-icons">
                        where_to_vote
                    </span>
                </div>
                
                <button onClick={closeModal} className="btnClose">Close</button>
            </Modal>
           
                
           
        </>
    )
}

export default InforDetalhes;